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

  constructor(props: Object) {
   super(props);
   const {ListViewDataSourceInitValue, StyleSheet, ...other} = props;
   this.state = {
     dataSource: ListViewDataSourceInitValue,
     loaded: false,
   };

   this.styles = StyleSheet.create({
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
  }

  componentDidMount() {
    this.fetchData();
    this.wsSetup();
  }

  render() {
    const {ListView, View, Text, Image, HyperLink, ...other} = this.props;
    const styles = this.styles;
    const sceneRef = this;
    if (!this.state.loaded) {
      return (
       <View style={styles.container}>
         <Text>
           Loading movies...
         </Text>
       </View>
      );
    }

    let renderRow = function(rowData, sectionID, rowID, highlightRow) {
     const CellClassProps = {
       goToSampleMovieDetailBridge: (movie) => sceneRef.props.goToSampleMovieDetail(sceneRef, movie.id),
       styles: styles,
       Text: Text,
       View: View,
       Image: Image,
       HyperLink: HyperLink,
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
     <ListView
      {...listViewProps}
     />
   )
  }
}

class MovieCell extends Component {
  render() {
    const {data, goToSampleMovieDetailBridge, styles, View, Image, Text, HyperLink, ...other} = this.props;
    const movie = data;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <HyperLink
          onPress={ () => goToSampleMovieDetailBridge(movie) }
          style={styles.title} >
            {movie.title}
          </HyperLink>
          <Text style={styles.year}>
            {movie.year}
          </Text>
        </View>
      </View>
    )
  }
}

exports.SampleAppMovies = SampleAppMovies;
// `exports` is an alias to `module.exports` for Node.js with ES6
