/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react'
import FirstScreen from './src/screen/firstScreen'
import App from './routerManager'
import {createAppContainer} from 'react-navigation'


const Projeto = createAppContainer(App);

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Projeto);
