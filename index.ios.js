/**
* @flow
*/

import {
  AppRegistry
} from 'react-native';

import {
  NativeNavigator,
} from './NativeNavigator'

class ReactNativeStarterPackage extends NativeNavigator {

}

AppRegistry.registerComponent('ReactNativeStarterPackage', () => ReactNativeStarterPackage);
