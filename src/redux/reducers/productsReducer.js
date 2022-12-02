import { productsActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productsReducer = (state = initialState, action) => {
  const selectedItem = state.cart.find(
    (item) => item._id === action.payload._id
  );
  switch (action.type) {
    case productsActionTypes.ADD_TO_CART:
      if (selectedItem) {
        const restsOfCart = state.cart.filter(
          (product) => product._id !== selectedItem._id
        );

        selectedItem.cartQuantity = selectedItem.cartQuantity + 1;

        return {
          ...state,
          cart: [...restsOfCart, selectedItem],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, cartQuantity: 1 }],
      };

    case productsActionTypes.DECREASE_QUANTITY:
      if (selectedItem.cartQuantity > 1) {
        const restsOfCart = state.cart.filter(
          (product) => product._id !== selectedItem._id
        );
        selectedItem.cartQuantity = selectedItem.cartQuantity - 1;

        return {
          ...state,
          cart: [...restsOfCart, selectedItem],
        };
      }
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== selectedItem._id),
      };

    case productsActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };

    default:
      break;
  }
};

export default productsReducer;
