import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-gesture-handler'


 export default function BookList({bookImage, title}) {
    const bookImages = [
        'https://blog.iso50.com/wp-content/uploads/2009/03/universe-dark.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIl4MmN4dXlP3vA8ozbdyAOrg1unzWpNJ3c5VS-1pSg&s',
        'https://i0.wp.com/www.isfdb.org/wiki/images/2/20/PLNDRFXNGB1972.jpg',
        'https://i2.wp.com/signalsfromtheedge.org/wp-content/uploads/2021/12/Red-Planet-1981.jpg?resize=459%2C800&ssl=1'
      ];
    return (
        
        <View style={styles.card}>
            <ScrollView horizontal={true}>
                <BookList bookImages={bookImage} title={title}/>
            </ScrollView>
         
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
