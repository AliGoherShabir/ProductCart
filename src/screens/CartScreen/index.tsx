import React, {useMemo, FC, JSX} from 'react';
import {View, Text, Button, FlatList, Dimensions, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CartItem from '../../components/CartItem';
import {clearCart} from '../../store/slices/cartSlice';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {CartScreenProps} from '../../navigators/CartStackNavigator';

const CartScreen: FC<CartScreenProps> = (): JSX.Element => {
  const listHeight = useMemo(() => Dimensions.get('screen').height * 0.6, []);
  const cartItems = useAppSelector(state => state.cart.data);
  const dispatch = useAppDispatch();

  const isCartEmpty: boolean = !cartItems || cartItems.length === 0;

  const totalPrice: string = cartItems
    ?.reduce((total, item) => total + item.price * item.quantity, 0)
    ?.toFixed(2);

  const handleClearCart = () => dispatch(clearCart());

  return (
    <SafeAreaView edges={['right', 'top', 'left']}>
      <Text style={styles.titleText}>My Cart</Text>
      <View style={{height: listHeight}}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartItem item={item} />}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Your cart is empty!</Text>
          }
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${totalPrice}</Text>
        <Button
          disabled={isCartEmpty}
          title="Clear Cart"
          onPress={handleClearCart}
        />
      </View>
      <Button
        disabled={isCartEmpty}
        title="Proceed to checkout"
        color={'green'}
        onPress={() => Alert.alert('Under Development!')}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
