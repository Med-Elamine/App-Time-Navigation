import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const MovieScreen = ( {navigation, route} ) => {
    const movie = route.params.movie;
    
    return (
      <View style={styles.mainView}>
        <Text style={{fontSize: 20}}>{movie.title} ({movie.release})</Text>
        <Text style={{fontSize: 100}} >{movie.screenNumber}</Text>
        <Button
            title="Go to Image"
            onPress={() => {navigation.navigate("BigImage",{from: "Movie"})}}/>
        <Button
          title="More Details"
          onPress={() => {
            movie.screenNumber = movie.screenNumber + 1;
            navigation.push("MoreMovieDetails",
                            {movie: movie} )}}/>
        <Button
          title="Go Back to Home"
          onPress={() => {navigation.popToTop()}}/>
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