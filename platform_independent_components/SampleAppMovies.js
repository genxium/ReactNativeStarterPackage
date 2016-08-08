/**
 * This is a simple file created to demonstrate how module export/import works in NodeJS.
 *
 * Sample reference http://facebook.github.io/react-native/docs/sample-application-movies.html
 *
 * module reference http://darrenderidder.github.io/talks/ModulePatterns/#/
 *
 * @flow
 */

'use-strict';

import React, {
 Component,
} from 'react';

import {
 Image,
 StyleSheet,
 Text,
 View
} from 'react-native';

import constants from './constants';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class SampleAppMovies extends Component {
  state: {
   dataSource: any,
   loaded: boolean
  };

  wsSetup() {
    let host = "localhost";
    let port = "9090";
    let path = "/echo";
    let ws = new WebSocket("ws://" + host + ":" + port + path); // `wss` associated sample codes to be provided
    ws.onopen = () => {
      // connection opened
      ws.send('hi'); // send a message
    };

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  }

  constructor(props: Object) {
   super(props);
   this.state = {
     dataSource: this.props.ListViewDataSourceInitValue,
     loaded: false,
   };
  }

  componentDidMount() {
    this.fetchData();
    this.wsSetup();
  }

  fetchData() {
    fetch(REQUEST_URL)
     .then((response) => response.json())
     .then((responseData) => {
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
         loaded: true,
       });
     });
  }

  render() {
    // should be implemetned by React.Component subclasses
    if (!this.state.loaded) {
     return this.renderLoadingView();
    }

    let renderRow = function(rowData, sectionID, rowID, highlightRow) {
     const {navigator, HyperLinkClass, HyperLinkPropsFilter, ...other} = this.props
     const CellClassProps = {
       navigator: navigator,
       HyperLinkClass: HyperLinkClass,
       HyperLinkPropsFilter: HyperLinkPropsFilter,
       data: rowData,
     }
     return (
       <MovieCell
         {...CellClassProps}
       />
     )
   }

   const listViewProps = Object.assign({
     dataSource: this.state.dataSource,
     renderRow: renderRow.bind(this),
     style: styles.listview,
   }, this.props)

   return (
     <this.props.ListViewClass
      {...listViewProps}
     />
   )
  }

  renderLoadingView() {
    return (
     <View style={styles.container}>
       <Text>
         Loading movies...
       </Text>
     </View>
    );
  }
}

class MovieCell extends Component {
  render() {
    const movie = this.props.data;
    const url = constants.ROUTE_PATHS.MOVIE + "/" + movie.id;
    const route = {
      path: constants.ROUTE_PATHS.MOVIE,
      params: {
        movieId: movie.id
      }
    };
    const onPress = () => this.props.navigator.push(route);
    const paramDict = this.props.HyperLinkPropsFilter({
      to: url,
      onPress: onPress
    })

    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <this.props.HyperLinkClass
          {...paramDict}
          style={styles.title} >
            {movie.title}
          </this.props.HyperLinkClass>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 rightContainer: {
   flex: 1,
 },
 title: {
   fontSize: 14,
   marginBottom: 8,
   textAlign: 'center',
 },
 year: {
   textAlign: 'center',
 },
 thumbnail: {
   width: 53,
   height: 81,
 },
 listView: {
   paddingTop: 20,
   backgroundColor: '#F5FCFF',
 },
});

exports.SampleAppMovies = SampleAppMovies;
// `exports` is an alias to `module.exports` for Node.js with ES6
