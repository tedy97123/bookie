import React, { useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Image, Alert } from 'react-native';
import { Button, Icon, Card } from "react-native-elements";
import { usePostBookTitleMutation } from '../../api/api.ts';

const Search = () => {
  const [bookInfo] = usePostBookTitleMutation();
  const [bookName, setBookName] = useState('');
  const [bookData, setBookData] = useState([]);
  const [image , setImage] = useState();
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log(bookName);
    bookInfo({ title: bookName })
      .unwrap()
      .then(updateResponse => {
        // console.log('Book:', updateResponse);
        // setImage('Image',updateResponse[0].image[0]) 
        setBookData(updateResponse);
        setError('');
      })
      .catch(error => {
        console.error('Error posting book:', error);
        setError('Failed to fetch book data. Please try again.');
        Alert.alert('Error', 'Failed to fetch book data. Please try again.');
      });
  };

  const renderBookItem = ({ item }) => (
    <Card>
      <Card.Title>{item.title}</Card.Title>
      {/* <Image 
        source={{ uri: item.image[0]}} 
        style={styles.bookImage}
      /> */}
      <Text>Author: {item.author_name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Year: {item.publish_year}</Text>


    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Text style={styles.headerText}>Search</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here to Find a book!"
          onChangeText={setBookName}
          value={bookName}
        />
        <Button  
          buttonStyle={styles.button}
          onPress={handleSubmit}
          disabled={!bookName}
          icon={<Icon name='search' size={15} color="white" />}
          title="Search"
          accessibilityLabel="Search for books"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <FlatList
        data={bookData}
        renderItem={renderBookItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchSection: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight:  'bold'
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
  },
  bookImage: {
    height: 200,
  },
  errorText: {
    color: 'red',
  }
});

export default Search;
