import 'react-native';
import {it, describe, expect} from '@jest/globals';
import { cartReducer } from '../src/store/slices';
import { addToCart, removeFromCart, incrementCart, decrementCart, clearCart } from '../src/store/slices/cartSlice';
import { CartProduct } from '../src/store/types';
  
  describe('cartSlice reducer', () => {
    interface CartState {
        data: CartProduct[];
    }

    const initialState: CartState = {
      data: [],
    };
  
    const mockProduct: CartProduct = {
        id: 1,
        colour: 'Black',
        name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
        price: 10,
        img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
        quantity: 1
    };
  
    it('should handle addToCart', () => {
      const nextState = cartReducer(initialState, addToCart(mockProduct));
      expect(nextState.data).toEqual([mockProduct]);
    });
  
    it('should handle removeFromCart', () => {
      const state = { data: [mockProduct] };
      const nextState = cartReducer(state, removeFromCart(mockProduct));
      expect(nextState.data).toEqual([]);
    });
  
    it('should handle incrementCart', () => {
      const state = { data: [mockProduct] };
      const nextState = cartReducer(state, incrementCart(mockProduct));
      expect(nextState.data[0].quantity).toEqual(2);
    });
  
    it('should handle decrementCart', () => {
      const state = { data: [mockProduct] };
      const nextState = cartReducer(state, decrementCart(mockProduct));
      expect(nextState.data[0].quantity).toEqual(1);
    });
  
    it('should handle clearCart', () => {
      const state = { data: [mockProduct] };
      const nextState = cartReducer(state, clearCart());
      expect(nextState).toEqual(initialState);
    });
  });
  