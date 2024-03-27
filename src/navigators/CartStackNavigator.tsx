import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';

type CartStackParamList = {
  CartScreen: undefined;
};

export type CartScreenProps = NativeStackScreenProps<
  CartStackParamList,
  'CartScreen'
>;

const CartStack = createNativeStackNavigator<CartStackParamList>();

export const CartStackNavigator = () => (
  <CartStack.Navigator screenOptions={{headerShown: false}}>
    <CartStack.Screen name="CartScreen" component={CartScreen} />
  </CartStack.Navigator>
);
