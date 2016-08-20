import React, {
	Component
} from 'react'

import ReactNative, {
  Navigator,
} from 'react-native'

import constants from './platform_independent_components/constants'

import {
  SampleAppMovies,
  SampleMovieDetail,
} from './platform_independent_components'

class NativeNavigator extends Component {

  render() {
    const routes = [
      {
        path: constants.ROUTE_PATHS.HOME,
      }
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route: Object, navigator: Navigator) {
    // Reference https://facebook.github.io/react/docs/transferring-props.html
    const dict = {
      ListView: ReactNative.ListView,
      ListViewDataSourceInitValue: new ReactNative.ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      HyperLink: React.createClass({
				propTypes: {
					onPress: React.PropTypes.func.isRequired
				},
        render: function() {
          const {onPress, ...other} = this.props;
          return (
            <ReactNative.TouchableHighlight onPress={onPress}>
              <ReactNative.Text {...other}>
                {this.props.children}
              </ReactNative.Text>
            </ReactNative.TouchableHighlight>
          );
        }
      }),
			View: ReactNative.View,
			Text: ReactNative.Text,
			Image: ReactNative.Image,
			StyleSheet: ReactNative.StyleSheet,
			goToSampleMovieDetail: function(sceneRef: Component, movieId: number) {
				const route = {
		      path: constants.ROUTE_PATHS.MOVIE,
		      params: {
		        movieId: movieId
		      }
		    };
				navigator.push(route);
			},
			goBack: function(sceneRef: Component) {
				navigator.pop();
			},
      params: route.params // to match react-router nomenclatures
    }
    if(route.path === constants.ROUTE_PATHS.HOME) {
      return <SampleAppMovies
        {...dict}
      />
    }
    if(route.path === constants.ROUTE_PATHS.MOVIE) {
      return <SampleMovieDetail
        {...dict}
      />
    }
  }
}

exports.NativeNavigator = NativeNavigator;
