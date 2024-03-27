import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from '../screens/ProductsScreen';
import {Product} from '../store/types';

type ProductStackParamList = {
  ProductScreen: undefined;
  ProductDetailsScreen: {data: Product};
};

export type ProductScreenProps = NativeStackScreenProps<
  ProductStackParamList,
  'ProductScreen'
>;

const ProductStack = createNativeStackNavigator<ProductStackParamList>();

export const ProductStackNavigator = () => (
  <ProductStack.Navigator screenOptions={{headerShown: false}}>
    <ProductStack.Screen name="ProductScreen" component={ProductsScreen} />
  </ProductStack.Navigator>
);
