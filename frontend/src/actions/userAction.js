import axios from "axios";
import {
    LOGIN_FAIL, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    CLEAR_ERROR, 
    REGISTER_USER_FAIL, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL} from '../constants/userConstants';

export const login = (email, password) =>  async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST });
        const config = {headers: {"Content-Type" : "application/json" } };

        const {data} = await axios.post('/account/login', {email, password}, config);

        dispatch({type: LOGIN_SUCCESS, payload: data.user});
    }
    catch (error){
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

//register
export const register = (name,email,password) =>  async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST});
        const config = {headers: {"Content-Type" : "application/json" } };

        const {data} = await axios.post('/account/register', {name, email, password}, config);

        dispatch({type: REGISTER_USER_SUCCESS, payload: data.user});
    }
    catch (error){
        dispatch({type: REGISTER_USER_FAIL, payload: error.response.data.message });
    }
}

//logout 
export const logout = () => async(dispatch) => {
    try {
        await axios.get('/account/logout');
    
        dispatch({ type: LOGOUT_SUCCESS });
      } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
      }
}

export const clearError = ()=> async (dispatch)=> {
    dispatch({
        type: CLEAR_ERROR,
    });
};
