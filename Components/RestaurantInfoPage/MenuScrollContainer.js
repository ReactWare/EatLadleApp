import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import MenuCard from './MenuCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MenuScrollContainer = ({ data, pressFn }) => {
  return (
    <ScrollView style={style.container}>
      {data.menu.kits.map((item, i) => (
        <MenuCard key={JSON.stringify(item)} item={item} pressFn={pressFn} index={i} data={data}/>
      ))}
    </ScrollView>
  );
};

export default MenuScrollContainer;
