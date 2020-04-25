import React from 'react';
import { TextInput } from 'react-native-paper';

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
        label={this.props.id}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}
