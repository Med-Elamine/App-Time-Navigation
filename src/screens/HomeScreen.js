import React from 'react';
import { Button, View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation, route}) => {
  console.log(route);
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
          <TouchableOpacity
            style={styles.touchableView}
            onPress={() => {navigation.navigate("Details",{from: "Home",screenNumber: 1})}}>
              <Text style={styles.touchableText}>Go to Details</Text>
            </TouchableOpacity>
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
    },
    touchableView: {
      marginTop: 30,
      marginBottom: 30,
      width: 150,
      height: 50,
      alignItems: 'center',
      backgroundColor: 'orange',
      borderWidth: 5,
      borderRadius: 10,
    },
    touchableText: {
      textAlign: 'center',
      padding: 5,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
  });
  
  export default HomeScreen;