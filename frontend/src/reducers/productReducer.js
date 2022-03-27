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
    PRODUCT_DETAILS_SUCCESS,
    RELATABLE_PRODUCT_FAIL,
    RELATABLE_PRODUCT_REQUEST,
    RELATABLE_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_SUCCESS
} from '../constants/productConstants';


//to get all products
export const productReducer = ((state = {products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
        case ADMIN_PRODUCT_REQUEST:
            return {
                loading: true, 
                products:[],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products:action.payload.products,
                productsCount:action.payload.productsCount,
            };
        case ADMIN_PRODUCT_SUCCESS:
          return{
            loading: false,
            products: action.payload,
          };
        case ALL_PRODUCT_FAIL:
        case ADMIN_PRODUCT_FAIL:
           return {
               loading: false,
               error:action.payload,
           };
        case CLEAR_ERROR:
            return{
                ...state,
                error: null,
            };
        default:
            return state;
    }
});

//relatable product 
export const relatableProductReducer = ((state = {products: [] }, action) => {
  switch(action.type){
    case RELATABLE_PRODUCT_REQUEST:
      return{
        loading: true,
        products: [],
      };
    case RELATABLE_PRODUCT_SUCCESS:
      return{
        loading: false, 
        products: action.payload.products,
        productCount: action.payload.productCount
      };
    case RELATABLE_PRODUCT_FAIL:
      return{
        loading: false,
        error: action.payload
      };
    case CLEAR_ERROR:
      return{
        ...state,
        error: null
      };
    default:
      return state;
  }
});

//add product details
export const productDetailsReducer = ((state = {product: {} }, action) => {
  switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
          return {
              loading: true, 
              ...state,
          };
      case PRODUCT_DETAILS_SUCCESS:
        // console.log("hello");
        // console.log(action.payload);
          return {
              loading: false,
              product:action.payload,
          };
      case PRODUCT_DETAILS_FAIL:
         return {
             loading: false,
             error:action.payload,
         };
      case CLEAR_ERROR:
          return{
              ...state,
              error: null,
          };
      default:
          return state;
  }
});


//to add new product 
export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case NEW_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PRODUCT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_PRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PRODUCT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export const productsReducer = (state= {}, action) => {
  switch(action.type){
    case DELETE_PRODUCT_REQUEST:
      return{
        ...state,
        loading: true
      };
    case DELETE_PRODUCT_SUCCESS:
      return{
        ...state,
        loading: false, 
        isDeleted: action.payload
      };
    case DELETE_PRODUCT_FAIL:
      return{
        ...state, 
        loading: false, 
        error: action.payload
      }; 
    case DELETE_PRODUCT_RESET:
      return{
        ...state, 
        isDeleted: false 
      };
    case CLEAR_ERROR:
      return{
        ...state,
        error: null 
      };
    default:
      return state;
  }
};