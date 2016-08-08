import React, {
	Component
} from 'react'

import ReactNative, {
  Navigator,
  TouchableHighlight,
  Text,
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

  renderScene(route, navigator) {
    // Reference https://facebook.github.io/react/docs/transferring-props.html
    const dict = {
      ListViewClass: ReactNative.ListView,
      ListViewDataSourceInitValue: new ReactNative.ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      HyperLinkClass: React.createClass({
        render: function() {
          const {onPress, ...other} = this.props
          return (
            <TouchableHighlight onPress={onPress}>
              <Text {...other}>
                {this.props.children}
              </Text>
            </TouchableHighlight>
          )
        }
      }),
      HyperLinkPropsFilter: function (propsIn) {
        const {onPress, ...other} = propsIn
        return {
          onPress: onPress
        }
      },
      navigator: navigator,
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
