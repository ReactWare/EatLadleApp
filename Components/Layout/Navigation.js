import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import StartBrowsePage from '../StartBrowsePage/StartBrowsePage';
import OwnerMenuView from '../OwnerMenuView/OwnerMenuView'
import RestaurantInfoPage from '../RestaurantInfoPage/RestaurantInfoPage';
import { createStackNavigator } from '@react-navigation/stack';

const RestaurantsInfoRoute = () => {
  const RestaurantInfoStack = createStackNavigator();
  return (
    <RestaurantInfoStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9c1f1f',
        },
        headerTintColor: '#fff',
      }}>
      <RestaurantInfoStack.Screen name="Home" component={StartBrowsePage} />
      <RestaurantInfoStack.Screen name="Restaurant" component={RestaurantInfoPage} />
    </RestaurantInfoStack.Navigator>
  );
};

const SearchRoute = () => <RestaurantInfoPage />;

const OwnerRoute = () => <OwnerMenuView />;

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'browse', title: 'Browse', icon: 'food'},
        {key: 'search', title: 'Search', icon: 'album'},
        {key: 'owner', title: 'Owner', icon: 'briefcase-outline'},
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
