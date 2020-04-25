import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, List, Paragraph} from 'react-native-paper';

const style = StyleSheet.create({
  card: {
    marginBottom: 2,
  },
});

const MenuScroll = ({item}) => (
  <List.Accordion
    title={`Food Option ${item}`}
    left={props => <List.Icon {...props} icon="folder" />}>
    <Card style={style.card}>
      <Card.Title title="Carne Asada Fries" />
      <Card.Content>
        <Paragraph>I want this shit so bad</Paragraph>
      </Card.Content>
    </Card>
  </List.Accordion>
);

export default MenuScroll;
