import React, {FC, JSX, useCallback} from 'react';
import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetAllProductsQuery} from '../../store/services/productsApi';
import styles from './styles';
import {Product} from '../../store/types';
import ProductItem from '../../components/ProductItem';
import {ProductScreenProps} from '../../navigators/ProductStackNavigator';

const ProductsScreen: FC<ProductScreenProps> = (props): JSX.Element => {
  const {data, isLoading} = useGetAllProductsQuery();

  const renderItem = useCallback(
    ({item}: {item: Product}) => (
      <ProductItem
        data={item}
        onItemPressed={() =>
          props.navigation.navigate('ProductDetailsScreen', {data: item})
        }
      />
    ),
    [data],
  );

  return (
    <SafeAreaView>
      <Text style={styles.titleText}>Products</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator style={styles.loaderStyle} size={'large'} />
            ) : (
              <Text style={styles.emptyText}>No product available!</Text>
            )
          }
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
