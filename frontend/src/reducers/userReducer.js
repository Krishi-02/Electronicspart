import {
    LOGIN_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_REQUEST, 
    CLEAR_ERROR, 
    REGISTER_USER_FAIL, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS, 
    LOGOUT_FAIL, 
    LOGOUT_SUCCESS} from '../constants/userConstants';


export const userLoginReducer = (state = {user : {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                loading: true, 
                isAuthenticated: false
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };   
        case LOGIN_FAIL:
            return{
                loading: false,
                isAuthenticated: false, 
                user: null, 
                error: action.payload
            };
        case CLEAR_ERROR:
            return {
                ...state, 
                error: null
            } 
        default:
            return state;
    }
}

export const userRegisterReducer = (state = {user : {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return{
                loading: true, 
                isAuthenticated: false
            };
        case REGISTER_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };   
        case REGISTER_USER_FAIL:
            return{
                loading: false,
                isAuthenticated: false, 
                user: null, 
                error: action.payload
            };
        case CLEAR_ERROR:
            return {
                ...state, 
                error: null
            } 
        default:
            return state;
    }
}

export const userLogoutReducer = (state = {user: {} }, action) => {
    switch(action.type) {
        case LOGOUT_SUCCESS:
            console.log("Logged out")
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            }; 
        case LOGOUT_FAIL:
            console.log("Logged out failed")
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
              ...state,
              error: null,
            };
          
        default:
            return state;
    }
}