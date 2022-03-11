import {CREATE_ORDER_FAIL, 
        CREATE_ORDER_REQUEST, 
        CREATE_ORDER_SUCCESS, 
        CLEAR_ERROR} from '../constants/orderConstants';
import axios from 'axios';

//create order 
export const createOrder = (order)=> async (dispatch)=>{
    try{
        dispatch({ type: CREATE_ORDER_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }; 

        const {data} = await axios.post("/order/new", order, config); 

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data }); 
    }
    catch(error){
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
        });
    } 
};

//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };