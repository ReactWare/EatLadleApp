import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, BottomNavigation } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ListItem from './ListItem.js';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    flex: 1,
    flexDirection: 'column',
    paddingTop: '10%',
  },
  scrollContainer: {
    height: '65%',
  }
});

class OwnerMenuView extends React.Component {
  state = {
    entreeList: false,
    sidesList: false,
  };

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
    left: (props) => (<List.Icon {...props} icon="star" />),
  }

    return (
      <View style={styles.container}>
        <List.Section>
          <List.Subheader>Menu</List.Subheader>
          <List.Accordion
            title="Entrée"
            name="entreeList"
            left={props => <List.Icon {...props} icon="food" />}
            expanded={this.state.entreeList}
            onPress={this.expandEntree}>
            <SafeAreaView style={styles.scrollContainer}>
              <ScrollView>
                <ListItem 
                  title={testProps.title} 
                  description={testProps.description}
                  left={testProps.left} />
              </ScrollView>
            </SafeAreaView>
          </List.Accordion>
          <List.Accordion
            title="Sides"
            name="sidesList"
            left={props => <List.Icon {...props} icon="food" />}
            expanded={this.state.sidesList}
            onPress={this.expandSides}>
            <SafeAreaView style={styles.scrollContainer}>
              <ScrollView>
                <List.Item title="First item" description="Item description" />
              </ScrollView>
            </SafeAreaView>
          </List.Accordion>
        </List.Section>
      </View>
    );
  }
}

export default withTheme(OwnerMenuView);
