/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MenuCard from './MenuCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MenuScrollContainer = ({ data, pressFn, nav }) => {
  return (
    <ScrollView style={style.container}>
      {data.menu.kits.map((item, i) => (
        <MenuCard
          key={JSON.stringify(item)}
          item={item}
          pressFn={pressFn}
          index={i}
          data={data}
          nav={nav}/>
      ))}
    </ScrollView>
  );
};

export default MenuScrollContainer;
