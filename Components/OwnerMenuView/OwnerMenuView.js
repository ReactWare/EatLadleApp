import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, List, withTheme, Appbar, FAB } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ListGroup from './ListGroup';
import { addItem, getItems } from './firestore';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    width: wp('100%'),
    flex: 1,
    flexDirection: 'column',
  },
  scrollContainer: {
    height: '95%',
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
      entreeList: [],
    };
  }

  updateState = (list) => {
    this.setState({
      entreeList: list
    })
  }

  componentDidMount() {
    getItems(this.updateState)
  }

  render() {
  // Pass Data from DB to list component later

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView style={styles.scrollContainer}>
            <Appbar.Header>
              <Appbar.Content title="Eat Ladle" />
            </Appbar.Header>
            <List.Section>
              <ListGroup
                title="Entree"
                icon="food"
                navigation={this.props.navigation}
                list={this.state.entreeList}
              />
              <ListGroup
                title="Sides"
                icon="food-croissant"
                navigation={this.props.navigation}
                list={this.state.entreeList}
              />
              <ListGroup
                title="Drinks"
                icon="cup-water"
                navigation={this.props.navigation}
                list={this.state.entreeList}
              />
              <ListGroup
                title="Other"
                icon="food-apple"
                navigation={this.props.navigation}
                list={this.state.entreeList}
              />
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
