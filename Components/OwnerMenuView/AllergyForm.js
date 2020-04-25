import React from 'react';
import { View, Stylesheet, StyleSheet } from 'react-native';
import { Text, Switch } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const allergies = ['Vegetarian', 'Vegan',  'Gluten Free', 'Nut Free', 'Egg Free', 'Shellfish Free'];

const styles = StyleSheet.create({
  toggles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    width: wp('50%'),
    left: wp('25%')
  }
})

export default class AllergyCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetarian: false,
      vegan: false,
      nutFree: false,
      eggFree: false,
      shellfishFree: false,
      glutenFree: false,
      other: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {allergies.map(item => {
          return (
            <View  style={styles.toggles}>
              <Text>{item}</Text>
              <Switch />
            </View>
          );
        })}
      </View>
    );
  }
}