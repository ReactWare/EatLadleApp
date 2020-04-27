/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme } from 'react-native-paper';
import PicGallery from './PicGallery';
import MenuScroll from './MenuScrollContainer';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

const RestaurantPage = ({ route, navigation }) => {
  const [kit, setKit] = useState(0);
  const data = route.params?.restaurantData;

  const changeGallery = index => {
    setKit(index);
  };

  return (
    <View style={style.wrapper}>
      <PicGallery data={data} kitIndex={kit} />
      <MenuScroll data={data} pressFn={changeGallery} nav={navigation}/>
    </View>
  );
};

export default withTheme(RestaurantPage);
