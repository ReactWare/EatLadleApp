/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Paragraph, Title, Caption } from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e1e1e1',
  },
  cardContainer: {
    height: 140,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

const RestaurantListingsPage = ({ route, navigation }) => {
  const data = route.params?.data;
  return (
    <ScrollView style={style.container}>
      {data.map((item, index) => (
        <Card
          style={style.cardContainer}
          elevation={index + 1}
          onPress={() => navigation.navigate('Restaurant', { restaurantData: item})}
        >
          <Title>{item.name}</Title>
          <Caption>{`Mon-Sun, ${item.hours.monday.open}a-${item.hours.monday.close}p`}</Caption>
          <Paragraph>{item.location.address}</Paragraph>
          <Paragraph>{`${item.location.city}, ${item.location.state} ${item.location.zipCode}`}</Paragraph>
          <Paragraph>{item.phoneNumber}</Paragraph>
        </Card>
      ))}
    </ScrollView>
  );
};

export default RestaurantListingsPage;
