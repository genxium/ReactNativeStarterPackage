/**
 * @flow
 */

import 'whatwg-fetch' // for browser compatibility

import {
  SampleAppMovies,
} from 'platform-independent-components'

import {
  AppRegistry
} from 'react-native'

// Components
class ReactNativeStarterPackage extends SampleAppMovies {
  // write some web specific codes here
}

// App registration and rendering
AppRegistry.registerComponent('ReactNativeStarterPackage', () => ReactNativeStarterPackage)
AppRegistry.runApplication('ReactNativeStarterPackage', { rootTag: document.getElementById('react-root') })
