import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERROR,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_RESET,
    NEW_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from '../constants/productConstants';

//get all products
export const getProduct = ()=> async (dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        });

        const {data} = await axios.get("/products");
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        });
    }
    catch(error){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.message,
        })
    }
};

//product details
export const getProductDetails = (id)=> async (dispatch)=>{
  try{
      dispatch({
          type:PRODUCT_DETAILS_REQUEST
      });

      const {data} = await axios.get(`/products/${id}`);
      // console.log(data);
      dispatch({
          type:PRODUCT_DETAILS_SUCCESS,
          payload:data.product,
      });
  }
  catch(error){
      dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload:error.response.data.message,
      });
  }
};


export const clearError = ()=> async (dispatch)=> {
    dispatch({
        type: CLEAR_ERROR,
    });
};

//new product
export const createProduct = (productData) => async (dispatch) => {
  console.log("Trial");
  console.log(productData)
    try {
      dispatch({ type: NEW_PRODUCT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/products/new`,
        productData,
        config
      );
      console.log("Done");
      console.log(data);

      dispatch({
        type: NEW_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };