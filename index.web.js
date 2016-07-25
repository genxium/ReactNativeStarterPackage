/**
 * @flow
 */

import 'whatwg-fetch' // for browser compatibility

import {
  AppRegistry
} from 'react-native'

import {
  SampleAppMovies,
} from './platform_independent_components'

// Components
class ReactNativeStarterPackage extends SampleAppMovies {

}

// App registration and rendering
AppRegistry.registerComponent('ReactNativeStarterPackage', () => ReactNativeStarterPackage)
AppRegistry.runApplication('ReactNativeStarterPackage', { rootTag: document.getElementById('react-root') })
