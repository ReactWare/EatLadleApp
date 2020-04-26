import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const allergyNames = ['Vegetarian', 'Vegan',  'Gluten Free', 'Nut Free', 'Egg Free', 'Shellfish Free'];
const allergies = ['vegetarian', 'vegan', 'glutenFree', 'nutFree', 'eggFree', 'shellfishFree']

const styles = StyleSheet.create({
  toggles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1%'
  },
  container: {
    width: wp('50%'),
    left: wp('25%'),
  },
  textBox: {
    width: wp('85%'),
    height: hp('5.5%'),
    alignSelf: 'center'
  }
})

export default class AllergyForm extends React.Component {
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

  onToggle = (item) => {
    this.setState({
      [item]: !this.state[item]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {allergies.map((item, i) => {
          return (
            <View style={styles.toggles}>
              <Text>{allergyNames[i]}</Text>
              <Switch value={this.state[item]} onValueChange={() => this.onToggle(item)} />
            </View>
          );
        })}
        <View>
          <Text>Other</Text>
          <TextInput 
            style={styles.textBox}
            mode="outlined"
            label="Enter Other Allergy Info Here"
            multiline={true}
            value={this.state.other}
            onChangeText={text => this.setState({other: text})}/>
        </View>
      </View>
    );
  }
}
