import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  addToCart,
  incrementCart,
  decrementCart,
  clearCart,
  removeFromCart,
} from '../../store/slices/cartSlice';
import styles from './styles';
import {CartProduct, Product} from '../../store/types';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

type ItemProps = PropsWithChildren<{
  item: CartProduct;
}>;

const AddToCartButton: FC<ItemProps> = ({item}): JSX.Element => {
  const {price = 0} = item;
  const dispatch = useAppDispatch();

  const cartItem = useAppSelector(state =>
    state.cart.data.find((_item: Product) => _item.id === item.id),
  );

  const count: number = cartItem?.quantity || 0;

  const handleAddToCart = () => dispatch(addToCart(item));
  const handleRemoveFromCart = () => dispatch(removeFromCart(item));
  const handleIncreaseCount = () => dispatch(incrementCart(item));
  const handleDecreaseCount = () => dispatch(decrementCart(item));

  return (
    <View style={styles.container}>
      {count === 0 ? (
        <Pressable style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </Pressable>
      ) : (
        <View style={styles.countContainer}>
          <Pressable onPress={handleDecreaseCount} disabled={count === 0}>
            <Text style={styles.plusMinusButton}> - </Text>
          </Pressable>
          <Text style={styles.count}>{count}</Text>
          <Pressable onPress={handleIncreaseCount}>
            <Text style={styles.plusMinusButton}> + </Text>
          </Pressable>
          <Pressable style={styles.removeButton} onPress={handleRemoveFromCart}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </Pressable>
        </View>
      )}
      {count > 0 && (
        <Text style={styles.totalPrice}>Total price: {count * price}$</Text>
      )}
    </View>
  );
};

export default AddToCartButton;
