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
   ListView,
   StyleSheet,
   Text,
   View,
 } from 'react-native';

 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

 class SampleAppMovies extends Component {
   constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       loaded: false,
     };
   }

   componentDidMount() {
     this.fetchData();
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
     if (!this.state.loaded) {
       return this.renderLoadingView();
     }

     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderMovie}
         style={styles.listView}
       />
     );
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

   renderMovie(movie) {
     return (
       <View style={styles.container}>
         <Image
           source={{uri: movie.posters.thumbnail}}
           style={styles.thumbnail}
         />
         <View style={styles.rightContainer}>
           <Text style={styles.title}>{movie.title}</Text>
           <Text style={styles.year}>{movie.year}</Text>
         </View>
       </View>
     );
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
