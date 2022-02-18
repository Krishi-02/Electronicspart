import {ADD_TO_CART, SAVE_SHIPPING_INFO, REMOVE_CART_ITEM} from '../constants/cartConstants';
import axios from 'axios';

export const addtoCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`products/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price, 
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};