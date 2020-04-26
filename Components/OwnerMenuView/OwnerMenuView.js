import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, Appbar, FAB } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ListItem from './ListItem.js';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    flex: 1,
    flexDirection: 'column',
  },
  scrollContainer: {
    height: '65%',
  },
  fabButton: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

class OwnerMenuView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entreeList: false,
      sidesList: false,
    };
  }

  expandEntree = () => {
    this.setState({
      entreeList: !this.state.entreeList,
    });
  };

  expandSides = () => {
    this.setState({
      sidesList: !this.state.sidesList,
    });
  };

  render() {
  // Pass Data from DB to list component later
    const testProps = {
      title: 'testing',
      description: 'super coolio dish',
      left: (props) => (<List.Icon {...props} icon="" />)
    }

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView style={styles.scrollContainer}>
            <Appbar.Header>
              <Appbar.Content title="Eat Ladle" />
            </Appbar.Header>
            <List.Section>
              <List.Subheader>Menu</List.Subheader>
              <List.Accordion
                title="Entrée"
                name="entreeList"
                left={props => <List.Icon {...props} icon="food" />}
                expanded={this.state.entreeList}
                onPress={this.expandEntree}>
                <ListItem
                  title={testProps.title}
                  description={testProps.description}
                  left={testProps.left}
                />
              </List.Accordion>
              <List.Accordion
                title="Sides"
                name="sidesList"
                left={props => <List.Icon {...props} icon="food-apple" />}
                expanded={this.state.sidesList}
                onPress={this.expandSides}>
                <List.Item title="First item" description="Item description" />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </SafeAreaView>
        <FAB
          style={styles.fabButton}
          icon="plus"
          onPress={() => this.props.navigation.navigate("Add Item")}
        />
      </View>
    );
  }
}

export default withTheme(OwnerMenuView);
