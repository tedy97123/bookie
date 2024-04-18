import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Cards from '../../components/Cards';
import BookGrid from '../../components/BookGrid';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import BookList from '../../components/BookList';

const Home = () => {
    const bookImages = [
        'https://blog.iso50.com/wp-content/uploads/2009/03/universe-dark.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIl4MmN4dXlP3vA8ozbdyAOrg1unzWpNJ3c5VS-1pSg&s',
        'https://i0.wp.com/www.isfdb.org/wiki/images/2/20/PLNDRFXNGB1972.jpg',
        'https://i2.wp.com/signalsfromtheedge.org/wp-content/uploads/2021/12/Red-Planet-1981.jpg?resize=459%2C800&ssl=1'
      ];
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Bookie!</Text>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' }}
          style={styles.headerImage}
        />
       <Text style={styles.userName}>Andy</Text>
       <View style={styles.playBacksection}>
            <Text style={styles.playBackTitle}>
                Recent AudioBooks
                </Text>
            <Image
              source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/free-play-1912208-1617677.png' }}
              style={styles.bookmarkIcon}
            />
             <ProgressBar style={styles.progressbar} progress={0.5} color={MD3Colors.tertiary0} />
        </View>
       </View>

      {/* Featured Content Section */}
      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Books</Text>
      </View>

      {/* Explore Section */}
      <View style={styles.exploreSection}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <Cards/>
      </View>

      {/* Recommended Section */}
      <View style={styles.recommendedSection}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <BookGrid bookImages={bookImages}/>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Bookie App</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  progressbar : {
    marginBottom:13
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius:50,
    right:10,
    height:340
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00040a',
    marginBottom: 15,
    right:50
  },
  headerImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00040a',
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    left: 125,
    marginBottom:10
  },
  playBackTitle: {
    fontSize: 10,
    fontWeight: 'light',
    marginBottom: 10,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  featuredSection: {
    backgroundColor: '#ffffff',
    padding: 30,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  playBacksection: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 20,
    width:300,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.32,
    shadowRadius: 5,
    elevation: 10,
    justifyContent:'space-between'
  },
  exploreSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  recommendedSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default Home;
