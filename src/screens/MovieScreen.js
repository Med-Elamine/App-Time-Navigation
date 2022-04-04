import React, {useEffect} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const MovieScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',"http://www.omdbapi.com/?t=Star+Wars&apikey=b9285720");
        xhr.send();
        xhr.onload = () => {
            console.log(xhr.responseText);
        }}, []);



    
    
    return (
      <View style={styles.mainView}>
        
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

export default MovieScreen;