import {ADD_TO_CART, SAVE_SHIPPING_INFO, REMOVE_CART_ITEM} from '../constants/cartConstants';
import axios from 'axios';

export const addtoCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            imageUrl: data.product.imageUrl,
            price: data.product.price, 
            countInStock: data.product.countInStock,
            qty,
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };