import React from 'react';
import { View } from 'react-native';
import { List, withTheme } from 'react-native-paper';

const ListItem = (props) => {
  return (
    <List.Item
      title={props.title}
      description={props.description}
      left={props.left}
    />
  );
};

export default withTheme(ListItem);
