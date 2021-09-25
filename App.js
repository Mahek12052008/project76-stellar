import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';

const Stack = createStackNavigator();

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initiaRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='DailyPic' component={DailyPic}/>
        <Stack.Screen name='SpaceCraft' component={SpaceCraft}/>
        <Stack.Screen name='StarMap' component={StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
