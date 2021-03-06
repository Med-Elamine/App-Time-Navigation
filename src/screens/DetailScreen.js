import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

const DetailsScreen = ({navigation, route}) => {
  console.log(route);
  const {from} = route.params;
  const {screenNumber} = route.params;
    return (
      <PanGestureHandler
      onGestureEvent={(gestureEvent) => {
      console.log("u're moving ur finger in mainView using gesture handler");
      }}>
      <View style={styles.mainView}>
        <Text>I came from {from}</Text>
        <Text>Details Screen</Text>
        <Text style={{fontSize: 100}}>{screenNumber}</Text>
          <Button
            title="Go to Image"
            onPress={() => {navigation.navigate("BigImage",{from: "Details"})}}/>
            <Button
            title="More Details"
            onPress={() => {navigation.push("MoreDetails",{from: "Details",screenNumber: (screenNumber + 1)})}}/>
      <Button
            title="Go Back a Srceen"
            onPress={() => {navigation.goBack()}}/>
      <Button
            title="Go Back Home"
            onPress={() => {navigation.popToTop()}}/>
      </View>
      </PanGestureHandler>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;