import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import {MainTabNavigator} from './MainTabNavigator';
import {Product} from '../store/types';

type MainStackParamList = {
  Tabs: undefined;
  ProductDetailsScreen: {data: Product};
};

export type ProductDetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ProductDetailsScreen'
>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Tabs" component={MainTabNavigator} />
    <Stack.Screen
      name="ProductDetailsScreen"
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);
