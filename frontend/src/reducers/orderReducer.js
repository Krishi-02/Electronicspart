import {CREATE_ORDER_FAIL, 
        CREATE_ORDER_REQUEST, 
        CREATE_ORDER_SUCCESS,
        CLEAR_ERROR} from '../constants/orderConstants';

export const newOrderReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return {
                ...state, 
                loading: true,
            };
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false, 
                order: action.payload, 
            };
        case CREATE_ORDER_FAIL:
            return {
                loading: false, 
                error: action.payload,
            }; 
        case CLEAR_ERROR:
            return{
                ...state,
                error: null
            };
        default:
            return state 
    }
};