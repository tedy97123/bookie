import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
export default function BookGrid({bookImages,title}) {
    const renderItem = ({ item }) => (
        <Image
          source={{ uri: item }}
          style={styles.bookImage}
        />
      );
  return (
    <View style={styles.recentBooks}>
    <Text style={styles.recentBooksTitle}>{title}</Text>
    <FlatList
      data={bookImages}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Set the number of columns
    />
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f9fc',
      paddingVertical: 25,
      paddingHorizontal: 10,
    },
    recentBooksTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#000',
      height: 200,
      borderRadius: 25,
      marginTop: 10,
    },
    bookImage: {
      width: '45%', // Adjust the width as needed
      aspectRatio: 0.50, // Maintain aspect ratio
      margin: '2.5%', // Add margin between images
      height:'80%'
    },
    profileImage: {
      width: 150,
      height: 150,
      marginVertical: 20,
      marginLeft: 100,
      borderRadius: 100,
      padding: 10,
    },
    editProfile: {
      color: '#fff',
      height: 36,
      overflow: 'visible',
      marginTop: 20,
      marginLeft: 10,
    },
    userInfo: {
      marginTop: 0,
      marginLeft: 10,
      padding: 3,
      marginBottom: 10,
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00040a',
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#f8f9fa',
      padding: 12,
      marginTop: 5,
      right: 9,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    statText: {
      fontSize: 14,
      color: 'gray',
    },
    about: {
      backgroundColor: '#f8f9fa',
      padding: 20,
    },
    aboutTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    aboutDetails: {
      marginLeft: 10,
    },
    aboutText: {
      fontStyle: 'italic',
      marginBottom: 5,
    },
    recentPhotos: {
      marginTop: 20,
    },
    recentPhotosTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: 'flex-end',
    },
  });