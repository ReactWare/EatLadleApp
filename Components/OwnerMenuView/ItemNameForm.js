import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textInput: {
    width: wp('90%'),
    justifyContent: 'center',
    alignSelf: 'center',
  }
})

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <TextInput
        mode="outlined"
        style={styles.textInput}
        label={this.props.name}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}
