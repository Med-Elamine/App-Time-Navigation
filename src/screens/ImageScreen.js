import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ImageScreen = ({navigation, route}) => {
  console.log(route);
  const {from} = route.params;
    return (
      <View style={styles.mainView}>
        <Text>I came from {from}</Text>
        <Text>Image Screen</Text>
          <Button
            title="Go Home"
            onPress={() => {navigation.navigate("Home",{from: "BigImage"})}}/>
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

export default ImageScreen;