import React, {useEffect, useState} from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const MovieScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',"http://www.omdbapi.com/?t=Star+Wars&apikey=b9285720");
        xhr.send();
        xhr.onload = () => {
            let response = (xhr.status == 200?JSON.parse(xhr.response):'Failed');
            setMovieDetails(response);
            setIsLoaded(true);
        }}, []);



    
    
    return (
      <View style={styles.mainView}>
        {!isLoaded ? <ActivityIndicator/> :(
        <View style={styles.secondView}>
            <Text>{movieDetails.Title}</Text>
            <Text>{movieDetails.Released}</Text>
            <Text>{movieDetails.Plot}</Text>
        </View>
        )} 
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  secondView:{
    alignItems: "center",
  }
});

export default MovieScreen;