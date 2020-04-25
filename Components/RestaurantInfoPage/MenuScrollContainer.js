import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MenuCard from './MenuCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MenuScrollContainer = () => {
  return (
    <ScrollView style={style.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <MenuCard key={JSON.stringify(item)} item={item} />
      ))}
    </ScrollView>
  );
};

export default MenuScrollContainer;
