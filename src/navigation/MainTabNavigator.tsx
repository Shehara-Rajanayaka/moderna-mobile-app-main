import React, {act} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/home/HomeScreen';
import {AppNavigationParams} from '../types/commonNavigationParams';
import {GlobalSearch, Heart, Home} from 'iconsax-react-native';
import {Colors} from '../styles/Colors';
import FavouritesScreen from '../Screens/home/FavouritesScreen';
import ExploreProductesScreen from '../Screens/home/ExploreProductesScreen';

const Tab = createBottomTabNavigator<AppNavigationParams>();

const tabBarOptions = {
  tabBarActiveTintColor: Colors.PRIMARY_BLACK, // Active label color
  tabBarInactiveTintColor: Colors.GRAY_500, // Inactive label color
  tabBarShowLabel: true,
  tabBarStyle: {
    backgroundColor: Colors.PRIMARY_WHITE,
    borderTopWidth: 0.5,
    elevation: 0,
    shadowOpacity: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold' as 'bold',
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  //StatusBar color
  tabBarStatusBar: 'dark-content',
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Home size={size} color={color} variant="Outline" />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreProductes"
        component={ExploreProductesScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <GlobalSearch size={size} color={color} variant="Outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color, size}) => (
            <Heart size={size} color={color} variant="Outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
