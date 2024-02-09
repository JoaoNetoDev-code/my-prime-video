import { Image, TouchableOpacity, StyleSheet } from "react-native"

export const MoviesCard = ({movieURL}) => {
  return (
    <TouchableOpacity>
      <Image source={movieURL} style={styles.img}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
  }
})