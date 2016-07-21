/**
 * @flow
 */
 
import React, { Component } from 'react';

import {
  AppRegistry
} from 'react-native';

import {
  SampleAppMovies,
} from 'platform-independent-components'


class ReactNativeStarterPackage extends SampleAppMovies {

}

AppRegistry.registerComponent('ReactNativeStarterPackage', () => ReactNativeStarterPackage);
