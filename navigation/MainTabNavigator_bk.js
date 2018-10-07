import React from 'react';
import { Platform ,Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Home from '../screens/home';
import Categories from '../screens/categories';
import MyAccount from '../screens/myAccount';
import CardView from '../screens/cardView';
import CardEdit from '../screens/cardEdit';
import CardPreview from '../screens/cardPreview';

const HomeStack = createStackNavigator(
  {
    Home: Home,
    CardView: CardView,
    CardEdit: CardEdit,
    CardPreview: CardPreview,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Image style={{width: 50, height: 60}} resizeMode='contain' source={require('../assets/images/Icon_account.png')}/>
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Linksssss',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
