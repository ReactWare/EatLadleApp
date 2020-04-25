import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomNav from './Navigation.js';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: theme => ({
    height: 35,
    backgroundColor: theme.colors.primary,
  }),
});

const Layout = ({children, theme}) => {
  return (
    <View style={style.container}>
      <View style={style.topBar(theme)} />
      {children}
      <BottomNav />
    </View>
  );
};

export default Layout;
