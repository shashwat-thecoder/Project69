import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ScannerScreen from './screens/searchScreen'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  ScannerScreen : {screen : ScannerScreen},
})

const AppContainer = createAppContainer(TabNavigator)