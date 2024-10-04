import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="thumbs-up" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="comment" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Ad Card */}
      <View style={styles.card}>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="thumbs-up" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="comment" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="thumbs-up" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="comment" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    width: width * 0.9,
  },
  image: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 10,
  },
  video: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 10,
  },
});
