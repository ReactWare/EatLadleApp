import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import StartBrowsePage from '../StartBrowsePage/StartBrowsePage';
import RestaurantsPage from '../RestaurantInfoPage/RestaurantInfoPage';
import OwnerMenuView from '../OwnerMenuView/OwnerMenuView'

const RestaurantsInfoRoute = () => <StartBrowsePage />;

const SearchRoute = () => <Text>Search</Text>;

const OwnerRoute = () => <OwnerMenuView />;

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
