/**
* @flow
*/

import {
  AppRegistry
} from 'react-native';

import {
  SampleAppMovies,
} from './platform_independent_components'

class ReactNativeStarterPackage extends SampleAppMovies {

}

AppRegistry.registerComponent('ReactNativeStarterPackage', () => ReactNativeStarterPackage);
