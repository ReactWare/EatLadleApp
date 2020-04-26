import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e1e1e1',
  },
  cardContainer: {
    height: 100,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  }
})

const RestaurantListingsPage = ({ data, navigation }) => {
  return (
    <ScrollView style={style.container}>
      {[1,2,3,4,5].map((item) => (
        <Card style={style.cardContainer} elevation={item} onPress={() => navigation.navigate('Restaurant')}>
            <Title>Asian Restaurant #{item}</Title>
        </Card>
      ))}
    </ScrollView>
  )
}

export default RestaurantListingsPage;
