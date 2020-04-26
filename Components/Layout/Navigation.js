import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StartBrowsePage from '../StartBrowsePage/StartBrowsePage';
import OwnerMenuView from '../OwnerMenuView/OwnerMenuView'
import RestaurantInfoPage from '../RestaurantInfoPage/RestaurantInfoPage';
import RestaurantListingsPage from '../RestaurantListingsPage/RestaurantListingsPage'
import { createStackNavigator } from '@react-navigation/stack';
import PhoneAuth from '../OwnerMenuView/PhoneAuth'
import AddItemMenu from '../OwnerMenuView/AddItemMenu';
import { NavigationContainer } from '@react-navigation/native';
import EditItemMenu from '../OwnerMenuView/EditItemMenu';

const headerOptions = {
  headerStyle: {
    backgroundColor: '#9c1f1f',
  },
  headerTintColor: '#fff',
}

const RestaurantsInfoRoute = () => {
  const RestaurantInfoStack = createStackNavigator();
  return (
    <NavigationContainer independent>
      <RestaurantInfoStack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
        <RestaurantInfoStack.Screen name="Home" component={StartBrowsePage} />
        <RestaurantInfoStack.Screen name="Restaurant" component={RestaurantInfoPage} />
        <RestaurantInfoStack.Screen name="Restaurant List" component={RestaurantListingsPage} />
      </RestaurantInfoStack.Navigator>
    </NavigationContainer>
  );
};

const SearchRoute = () => <RestaurantListingsPage />;

const OwnerRoute = () => <PhoneAuth />;
const OwnerRoute = () => {
  const OwnerStack = createStackNavigator();
  return (
    <NavigationContainer independent>
      <OwnerStack.Navigator initialRouteName="Owner Menu">
        <OwnerStack.Screen name="Owner Menu" component={OwnerMenuView} />
        <OwnerStack.Screen name="Add Item" component={AddItemMenu} />
        <OwnerStack.Screen name="Edit Item" component={EditItemMenu} />
      </OwnerStack.Navigator>
    </NavigationContainer>
  );
};

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      routes: [
        {key: 'browse', title: 'Browse', icon: 'queue-music'},
        {key: 'search', title: 'Search', icon: 'album'},
        {key: 'owner', title: 'Owner', icon: 'history'},
      ],
    };
    this._renderScene = BottomNavigation.SceneMap({
      browse: RestaurantsInfoRoute,
      search: SearchRoute,
      owner: OwnerRoute,
    });
    this._handleIndexChange = this._handleIndexChange.bind(this);
  }

  _handleIndexChange(index) {
    this.setState({index});
  }

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting
        sceneAnimationEnabled
      />
    );
  }
}
