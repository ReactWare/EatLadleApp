import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, Appbar, FAB } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ListItem from './ListItem.js';

class ListGroup extends React.Component {
  constructor(props) {
    super(props);
// Pass an array of items for the group through props
    this.state = {
      expanded: false,
    }
  }

  expandMenu = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  componentDidMount() {
    // console.log(this.props.list)
  }

  render() {
    return (
      <List.Accordion
        title={this.props.title}
        left={props => <List.Icon {...props} icon={this.props.icon} />}
        expanded={this.state.expanded}
        onPress={this.expandMenu}
      >
        {this.props.list.map(item => {
          return (
            <ListItem
              title={item.name}
              description={item.description}
              left=""
              navigation={this.props.navigation}
            />
          )
        })}
      </List.Accordion>
    )
  }
}

export default withTheme(ListGroup);
