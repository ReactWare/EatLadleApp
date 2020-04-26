import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Headline} from 'react-native-paper';


const style = StyleSheet.create({
  cardContainer: {
    width: '90%',
    margin: 15,
  },
  image: {
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  overlay: {
    position: 'absolute',
    height: '30%',
    width: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5,
  },
});

const CategoryCard = ({cuisine, pressFn}) => {
  return (
    <Card style={style.cardContainer} elevation={2} onPress={() => pressFn(cuisine.name)}>
      <Card.Cover style={style.image} source={{uri: cuisine.image}} />
      <View style={style.overlay}>
        <Headline style={style.cardText}>{cuisine.name}</Headline>
      </View>
    </Card>
  );
};

export default CategoryCard;
