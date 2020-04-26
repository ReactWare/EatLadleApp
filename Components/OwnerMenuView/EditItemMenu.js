import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Subheading, withTheme, Button } from 'react-native-paper';
import ItemNameForm from './ItemNameForm';
import AllergyForm from './AllergyForm';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  submitButton: {
    width: wp('25%'),
    height: hp('4.5%'),
    justifyContent: 'center',
    alignSelf: 'center',
    margin: '5%'
  },
  titles: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
  }
})

class EditItemMenu extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <Subheading styles={styles.titles}>Item Name</Subheading>
        <ItemNameForm id="Item Nameeeee"/>
        <Subheading styles={styles.titles}>Category</Subheading>
        <ItemNameForm />
        <Subheading styles={styles.titles}>Description</Subheading>
        <ItemNameForm />
        <Subheading>Allergies</Subheading>
        <AllergyForm />
        <Button
          style={styles.submitButton}
          icon="plus"
          mode="contained"
          onPress={() => console.log('submitted')}
        >
          Submit
        </Button>
      </View>
    )
  }
}

export default withTheme(EditItemMenu);
