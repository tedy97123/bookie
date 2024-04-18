import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Cards = () => {
  return (
     <View style={styles.harajukuSection}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.dribbble.com/users/754096/screenshots/14624988/media/9f21e142bd7ea3faa15965628d0caa22.png?resize=800x600&vertical=center' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Event</Text>
        <Text style={styles.cardText}>Details about the event.</Text>
        <Text style={styles.cardLink}>Learn More</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.dribbble.com/users/6397622/screenshots/14585231/media/4fc77aff1b5b3dcb2a272338aabb7a42.png?resize=1600x1200&vertical=center' }}
          style={styles.cardImage}
        />
        <Text style={styles.cardTitle}>Shop</Text>
        <Text style={styles.cardText}>Explore trendy shops.</Text>
        <Text style={styles.cardLink}>Shop Now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  harajukuSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '45%', // Adjust the width as needed
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardLink: {
    color: '#ff6ab4',
    fontWeight: 'bold',
  },
});

export default Cards;
