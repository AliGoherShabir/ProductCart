import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductStackNavigator} from './ProductStackNavigator';
import {CartStackNavigator} from './CartStackNavigator';

type MainTabParamList = {
  Products: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Products" component={ProductStackNavigator} />
    <Tab.Screen name="Cart" component={CartStackNavigator} />
  </Tab.Navigator>
);
