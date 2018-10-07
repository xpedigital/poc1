import React from 'react';
import { Image} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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
  tabBarIcon: <Image style={{width: 40, height: 48}} resizeMode='contain' source={require('../assets/images/Icon_home.png')}/>
};

const CategoriesStack = createStackNavigator(
  {
    Categories: Categories,
  },
  {
    initialRouteName: 'Categories',
    headerMode: 'none',
  }
);

CategoriesStack.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: <Image style={{width: 40, height: 48}} resizeMode='contain' source={require('../assets/images/Icon_cat.png')}/>
};

const MyAccountStack = createStackNavigator(
  {
    MyAccount: MyAccount,
  },
  {
    initialRouteName: 'MyAccount',
    headerMode: 'none',
  }
);

MyAccountStack.navigationOptions = {
  tabBarLabel: 'MyAccount',
  tabBarIcon: <Image style={{width: 40, height: 48}} resizeMode='contain' source={require('../assets/images/Icon_account.png')}/>
};

export default createBottomTabNavigator(
  {
    HomeStack,
    CategoriesStack,
    MyAccountStack,
  },
  {
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#ffffff', // active icon color
        inactiveTintColor: '#000000',  // inactive icon color
        style: {
            backgroundColor: '#f6b62f', // TabBar background
            height: 90,
            paddingVertical: 5, 
        },
        labelStyle:{ 
            fontFamily: 'IHateComicSans',
            fontSize: 18,
            marginTop:5,
            padding:0,
        },
        iconStyle: { padding:0 },
    }
  }
);
