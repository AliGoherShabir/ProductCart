import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';
import {
  incrementCart,
  decrementCart,
  removeFromCart,
} from '../../store/slices/cartSlice';
import {CartProduct} from '../../store/types';
import {useAppDispatch} from '../../store/hooks';

type ItemProps = PropsWithChildren<{
  item: CartProduct;
}>;

const CartItem: FC<ItemProps> = ({item}): JSX.Element => {
  const dispatch = useAppDispatch();

  const unitPrice: string = item.price.toFixed(2);
  const totalPrice: string = (item.price * item.quantity).toFixed(2);

  const handleRemove = () => dispatch(removeFromCart(item));
  const handleIncrement = () => dispatch(incrementCart(item));
  const handleDecrement = () => dispatch(decrementCart(item));

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: item.img}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: ${unitPrice}</Text>
        <View style={styles.quantityContainer}>
          <Button
            title="-"
            onPress={handleDecrement}
            disabled={item.quantity <= 1}
          />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Button title="+" onPress={handleIncrement} />
        </View>
        <Text style={styles.total}>Total: ${totalPrice}</Text>
        <Button title="Remove" color={'red'} onPress={handleRemove} />
      </View>
    </View>
  );
};

export default CartItem;
