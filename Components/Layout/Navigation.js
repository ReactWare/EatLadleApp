import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import StartBrowsePage from '../StartBrowsePage/StartBrowsePage';
import OwnerMenuView from '../OwnerMenuView/OwnerMenuView';
import RestaurantInfoPage from '../RestaurantInfoPage/RestaurantInfoPage';
import { createStackNavigator } from '@react-navigation/stack';
import AddItemMenu from '../OwnerMenuView/AddItemMenu';
import { NavigationContainer } from '@react-navigation/native';
import EditItemMenu from '../OwnerMenuView/EditItemMenu';

const RestaurantsInfoRoute = () => {
  const RestaurantInfoStack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <RestaurantInfoStack.Navigator initialRouteName="Home">
        <RestaurantInfoStack.Screen name="Home" component={StartBrowsePage} />
        <RestaurantInfoStack.Screen name="Restaurant" component={RestaurantInfoPage} />
      </RestaurantInfoStack.Navigator>
    </NavigationContainer>
  );
};

const SearchRoute = () => <RestaurantInfoPage />;

const OwnerRoute = () => {
  const OwnerStack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
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
      index: 0,
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
