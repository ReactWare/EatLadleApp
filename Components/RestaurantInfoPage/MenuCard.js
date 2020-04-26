import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, List, Paragraph, Button } from 'react-native-paper';


const style = StyleSheet.create({
  card: {
    marginBottom: 2,
    paddingLeft: 0,
  },
  content: {
    paddingLeft: 30,
  },
  button: {
    justifyContent: 'center',
  }
});

const MenuScroll = ({ item, pressFn, index, data }) => (
  <List.Accordion
    title={item.name}
    left={props => <List.Icon {...props} icon="food-fork-drink" />}
    onPress={() => pressFn(index)}
  >
    <Card style={style.card}>
      <Card.Content style={style.content}>
        {item.content.map((itemIndex) => (
          <Paragraph>{`x   ${data.menu.items[itemIndex].name}`}</Paragraph>
        ))}
      </Card.Content>
      <Card.Actions style={style.button}>
        <Button mode="contained">CHECKOUT</Button>
      </Card.Actions>
    </Card>
  </List.Accordion>
);

export default MenuScroll;
