import 'react-native';
import React from 'react';
import {it, jest, describe, expect} from '@jest/globals';
import ProductItem from '../src/components/ProductItem';
import {render, fireEvent} from '@testing-library/react-native';
import {Product} from '../src/store/types';

describe('ProductItem', () => {
  const mockProduct: Product = {
    id: 1,
    colour: 'Black',
    name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
    price: 10,
    img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
  };

  it('renders product details correctly', () => {
    const {getByText, getByTestId} = render(
      <ProductItem data={mockProduct} onItemPressed={() => {}} />,
    );

    const nameElement = getByText(mockProduct.name);
    const priceElement = getByText(`$${mockProduct.price}`);
    const imageElement = getByTestId('product-image');

    expect(nameElement).toBeTruthy();
    expect(priceElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
  });

  it('calls onItemPressed callback when pressed', () => {
    const mockOnItemPressed = jest.fn();
    const {getByTestId} = render(
      <ProductItem data={mockProduct} onItemPressed={mockOnItemPressed} />,
    );

    fireEvent.press(getByTestId('product-container'));
    expect(mockOnItemPressed).toHaveBeenCalledTimes(1);
  });
});
