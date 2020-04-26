import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, Appbar, FAB } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ListItem from './ListItem.js';

class ListGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
  }

  expandMenu = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const testProps = {
      title: 'testing',
      description: 'super coolio dish',
      left: (props) => (<List.Icon {...props} icon="" />)
    };
    return (
      <List.Accordion
        title={this.props.title}
        left={props => <List.Icon {...props} icon={this.props.icon} />}
        expanded={this.state.expanded}
        onPress={this.expandMenu}
      >
        <ListItem
          title={testProps.title}
          description={testProps.description}
          left={testProps.left}
        />
      </List.Accordion>
    )
  }
}

export default withTheme(ListGroup);
