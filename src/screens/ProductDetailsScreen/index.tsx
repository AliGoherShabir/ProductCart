import React, {FC, JSX} from 'react';
import {Image, View, Text, Button, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import AddToCartButton from '../../components/AddToCartButton';
import {CartProduct} from '../../store/types';
import {ProductDetailsScreenProps} from '../../navigators/MainStackNavigator';

const ProductDetailsScreen: FC<ProductDetailsScreenProps> = (
  props,
): JSX.Element => {
  const {name, price, img} = props.route.params.data;

  function _renderHeaderLayout(): JSX.Element {
    return (
      <View style={styles.headerStyle}>
        <Button title="Back" onPress={() => props.navigation.goBack()} />
        <Text style={styles.itemTitleText}>{name}</Text>
      </View>
    );
  }

  function _renderDetailsLayout(): JSX.Element {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemDetails}>
          <Text style={styles.labelText}>Price: </Text>
          <Text style={styles.itemPriceText}>${price}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.labelText}>Description: </Text>
          <Text>
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <Text key={`dummy_${index}`} style={styles.descriptionText}>
                  {index % 2 === 0 ? name : name.split('').reverse().join('')}
                </Text>
              ))}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {_renderHeaderLayout()}
      <ScrollView>
        <Image source={{uri: img}} style={styles.itemImage} />
        {_renderDetailsLayout()}

        <AddToCartButton item={props.route.params.data as CartProduct} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
