import React from 'react';
import { List, withTheme } from 'react-native-paper';

const ListItem = ({ title, description, left, navigation }) => {
  return (
    <List.Item
      title={title}
      description={description}
      left={left}
      onPress={() => navigation.navigate("Edit Item")}
    />
  );
};

export default withTheme(ListItem);
