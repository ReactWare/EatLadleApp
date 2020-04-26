import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, List, Paragraph} from 'react-native-paper';


const style = StyleSheet.create({
  card: {
    marginBottom: 2,
  },
});

const MenuScroll = ({ item, pressFn, index, data }) => (
  <List.Accordion
    title={item.name}
    left={props => <List.Icon {...props} icon="folder" />}
    onPress={() => pressFn(index)}
  >
    <Card style={style.card}>
      <Card.Content>
        {item.content.map((itemIndex) => (
          <Paragraph>{`x   ${data.menu.items[itemIndex].name}`}</Paragraph>
        ))
        }
      </Card.Content>
    </Card>
  </List.Accordion>
);

export default MenuScroll;
