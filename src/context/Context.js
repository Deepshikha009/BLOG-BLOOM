import React, { createContext, useReducer, useContext } from 'react';
import { cartReducer } from './Reducer';
import { faker } from '@faker-js/faker';

const CartContext = createContext(); // Create the context object

export const useCart = () => useContext(CartContext); // Custom hook for using the context
faker.seed(99)
const ContextProvider = ({ children }) => {
  const products = [...Array(24)].map(() => ({
    // Your product creation logic
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement ([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
