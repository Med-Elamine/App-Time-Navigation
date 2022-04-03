import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({navigation, route}) => {
  console.log(route);
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {navigation.navigate("Details",{from: "Home",screenNumber: 1})}}/>
            <Text>Movies</Text>
            <Button
          title="Star Wars"
          onPress={() => {
            navigation.navigate("Movie",{movie: {
              title:        "Star Wars",
              release:       1977,
              screenNumber:  1
            }} )}}/>
        <Button
          title="Black Panther"
          onPress={() => {
            navigation.navigate("Movie",{movie: {
              title:          "Black Panther",
              release:         2018,
              screenNumber:    1
            }} )}}/>
        <Button
          title="The Matrix"
          onPress={() => {
            navigation.navigate("Movie",{movie: {
              title:          "The Matrix",
              release:         1999,
              screenNumber:    1
            }} )}}/>
      </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }
  });
  
  export default HomeScreen;