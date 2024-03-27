import React, {FC, JSX} from 'react';
import type {PropsWithChildren} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {Product} from '../../store/types';
import styles from './styles';

type ItemProps = PropsWithChildren<{
  onItemPressed: () => void;
  data: Product;
}>;

const ProductItem: FC<ItemProps> = ({onItemPressed, data}): JSX.Element => {
  const {name, price, img} = data;
  return (
    <Pressable
      testID="product-container"
      onPress={onItemPressed}
      style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Image
          testID="product-image"
          source={{uri: img}}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitleText}>{name}</Text>
          <Text style={styles.itemPriceText}>${price}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
