/* eslint-disable prettier/prettier */
import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StartBrowsePage from '../StartBrowsePage/StartBrowsePage';
import OwnerMenuView from '../OwnerMenuView/OwnerMenuView';
import RestaurantInfoPage from '../RestaurantInfoPage/RestaurantInfoPage';
import RestaurantListingsPage from '../RestaurantListingsPage/RestaurantListingsPage';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneAuth from '../OwnerMenuView/PhoneAuth';
import AddItemMenu from '../OwnerMenuView/AddItemMenu';
import EditItemMenu from '../OwnerMenuView/EditItemMenu';
import PaymentScreen from '../Stripe/scenes/CardFormScreen';


const headerOptions = {
  headerStyle: {
    backgroundColor: '#9c1f1f',
  },
  headerTintColor: '#fff',
};

const MainRestaurantsScreen = () => {
  const RestaurantStack = createStackNavigator();
  return (
      <RestaurantStack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
        <RestaurantStack.Screen name="Home" component={StartBrowsePage} />
        <RestaurantStack.Screen name="Restaurant" component={RestaurantInfoPage} />
        <RestaurantStack.Screen name="Restaurant List" component={RestaurantListingsPage} />
      </RestaurantStack.Navigator>
  );
};

// FullRestaurantsRoute includes the payment component
const FullRestaurantsRoute = () => {
  const RootRestaurantStack = createStackNavigator();
  return (
    <NavigationContainer independent>
      <RootRestaurantStack.Navigator mode="modal">
        <RootRestaurantStack.Screen name="Main" component={MainRestaurantsScreen} options={{ headerShown: false }}/>
        <RootRestaurantStack.Screen name="Payment" component={PaymentScreen} />
      </RootRestaurantStack.Navigator>
    </NavigationContainer>
  );
};

const OwnerRoute = () => {
  const OwnerStack = createStackNavigator();
  return (
    <NavigationContainer independent>
      <OwnerStack.Navigator initialRouteName="Owner Menu" screenOptions={headerOptions}>
        <OwnerStack.Screen name="Owner Menu" component={OwnerMenuView} />
        <OwnerStack.Screen name="Add Item" component={AddItemMenu} />
        <OwnerStack.Screen name="Edit Item" component={EditItemMenu} />
        <OwnerStack.Screen name="Phone Auth" component={PhoneAuth} />
      </OwnerStack.Navigator>
    </NavigationContainer>
  );
};

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'browse', title: 'Browse', icon: 'food'},
        {key: 'owner', title: 'Owner', icon: 'briefcase-outline'},
      ],
    };
    this._renderScene = BottomNavigation.SceneMap({
      browse: FullRestaurantsRoute,

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
