import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, Appbar, FAB } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
<<<<<<< HEAD
import ListGroup from './ListGroup';
=======
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
>>>>>>> master

import ListItem from './ListItem.js';

const styles = StyleSheet.create({
  container: {
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
              <ListGroup title="Entreeeee" icon="food" />
            </List.Section>
          </ScrollView>
        </SafeAreaView>
        <FAB
          style={styles.fabButton}
          icon="plus"
          onPress={() => console.log('working button')}
        />
      </View>
    );
  }
}

export default withTheme(OwnerMenuView);
