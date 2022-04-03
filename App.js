import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ImageScreen from './src/screens/ImageScreen';
import MovieScreen from './src/screens/MovieScreen';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' 
        screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'orange'}
      }}>
        <stack.Screen name='Home' component={HomeScreen}
        options={{
          title: 'Movie Time',
          headerTitleStyle: {fontSize:30, fontWeight: 'bold'}
        }}/>
        <stack.Screen name='Details' component={DetailScreen}/>
        <stack.Screen name='MoreDetails' component={DetailScreen}/>
        <stack.Screen name='Movie' component={MovieScreen}
        options={
          ({route}) => ({title: route.params.movie.title})
        }/>
        <stack.Screen name='MoreMovieDetails' component={MovieScreen}
        options={
          ({route}) => ({title: route.params.movie.title})
        }/>
        <stack.Screen name='BigImage' component={ImageScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
