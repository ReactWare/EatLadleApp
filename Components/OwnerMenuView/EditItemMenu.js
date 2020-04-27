/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Subheading, withTheme, Button } from 'react-native-paper';
import ItemNameForm from './ItemNameForm';
import AllergyForm from './AllergyForm';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  submitButton: {
    width: wp('25%'),
    height: hp('4.5%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titles: {
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    margin: '5%',
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

class EditItemMenu extends React.Component {
  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 95 : 0;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.inner}>
                <Subheading style={styles.titles}>Item Name</Subheading>
                <ItemNameForm id="itemName" name="Item Name"/>
                <Subheading style={styles.titles}>Category</Subheading>
                <ItemNameForm  id="category" name="Category"/>
                <Subheading style={styles.titles}>Description</Subheading>
                <ItemNameForm  id="description" name="Description"/>
                <Subheading style={styles.titles}>Allergies</Subheading>
                <AllergyForm />
                <View style={styles.buttonContainer}>
                  <Button
                    style={styles.submitButton}
                    icon="plus"
                    mode="contained"
                    onPress={() => console.log('submitted')}
                  >
                    Submit
                  </Button>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

export default withTheme(EditItemMenu);
