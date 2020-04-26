import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import BottomNav from './Navigation.js';

const style = StyleSheet.create({
  topBar: theme => ({
    flex: 1,
    backgroundColor: theme.colors.primary,
  }),
});

const Layout = ({children, theme}) => {
  return (
    <SafeAreaView style={style.topBar(theme)}>
      {children}
      <BottomNav />
    </SafeAreaView>
  );
};

export default Layout;
