/**
* @flow
*/

import 'whatwg-fetch' // for browser compatibility

import React, {
  Component,
} from 'react'

import ReactNative, {
  AppRegistry,
  ListView,
  Text,
} from 'react-native'

import {
  Router,
  Route,
  Redirect,
  Link,
  IndexRedirect,
  browserHistory, // this is a singleton
} from 'react-router'

import {
  SampleAppMovies,
  SampleMovieDetail,
} from './platform_independent_components'

import constants from './platform_independent_components/constants'

// Components
class ReactNativeStarterPackage extends Component {
  render() {
    // Reference 1 https://facebook.github.io/react/docs/transferring-props.html
    // Reference 2 https://github.com/reactjs/react-router/issues/1531
    const dict = {
      ListViewClass: ReactNative.ListView,
      ListViewDataSourceInitValue: new ReactNative.ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      HyperLinkClass: React.createClass({
        render: function() {
          const {to, ...other} = this.props
          return (
            <Text {...other}>
              <Link to={this.props.to}>
                {this.props.children}
              </Link>
            </Text>
          )
        }
      }),
      HyperLinkPropsFilter: function (propsIn) {
        const {to, ...other} = propsIn
        return {
          to: to
        }
      },
    }
    return React.cloneElement(
      this.props.children,
      dict
    )
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path={constants.ROUTE_PATHS.ROOT} component={ReactNativeStarterPackage}>
      <IndexRedirect to={constants.ROUTE_PATHS.HOME} />
      <Route path={constants.ROUTE_PATHS.HOME} component={SampleAppMovies} />
      <Route path={constants.ROUTE_PATHS.MOVIE + constants.ROUTE_PARAMS.MOVIE_ID} component={SampleMovieDetail} />
    </Route>
  </Router>
);

// App registration and rendering
AppRegistry.registerComponent('ReactNativeStarterPackage', () => () => routes)
AppRegistry.runApplication('ReactNativeStarterPackage', { rootTag: document.getElementById('react-root') })
