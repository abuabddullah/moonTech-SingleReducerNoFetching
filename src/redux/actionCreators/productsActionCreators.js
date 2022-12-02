import { productsActionTypes } from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: productsActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: productsActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return {
    type: productsActionTypes.DECREASE_QUANTITY,
    payload: product,
  };
};