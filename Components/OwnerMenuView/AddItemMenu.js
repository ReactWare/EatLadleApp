import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Subheading, withTheme } from 'react-native-paper';
import ItemNameForm from './ItemNameForm';
import AllergyForm from './AllergyForm';

class AddItemMenu extends React.Component {
  render() {
    return (
      <View>
        <Subheading>Item Name</Subheading>
        <ItemNameForm id="Item Nameeeee"/>
        <Subheading>Category</Subheading>
        <ItemNameForm />
        <Subheading>Description</Subheading>
        <ItemNameForm />
        <Subheading>Allergies</Subheading>
        <AllergyForm />
      </View>
    )
  }
}

export default withTheme(AddItemMenu);
