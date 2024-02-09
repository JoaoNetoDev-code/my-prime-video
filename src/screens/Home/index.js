import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch"
import { MoviesCard } from "../../components/movieCard";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={require("../../assets/primeVideo.png")} />
        <Image style={styles.amazonLogoImg} source={require("../../assets/amazonLogo.png")} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image source={require("../../assets/movies/the_wheel_of_time.png")} />
        </TouchableOpacity>

        <Text style={styles.movieText}>Container Watching</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/> }
          horizontal
          contentContainerStyle={styles.contantList}
          showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.movieText}>Crime Movies</Text>
        
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/> }
          horizontal
          contentContainerStyle={styles.contantList}
          showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.movieText}>Container Watching</Text>
        
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/> }
          horizontal
          contentContainerStyle={styles.contantList}
          showsHorizontalScrollIndicator={false}
          />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start"
  },
  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },
  primeLogoImg: {
    // n precisei fazer stylo por agora ! >..
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF"
  },
  movieText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },
  movieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },
  contantList: {
    paddingLeft: 20,
    paddingRight: 30,
  },
  contentMovies: {

  }
});

export default Home;
