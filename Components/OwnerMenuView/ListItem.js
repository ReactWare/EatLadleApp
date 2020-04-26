import React from 'react';
import { List, withTheme } from 'react-native-paper';

const ListItem = (props) => {
  return (
    <List.Item
      title={props.title}
      description={props.description}
      left={props.left}
      onPress={() => console.log('CLICK')}
    />
  );
};

export default withTheme(ListItem);
