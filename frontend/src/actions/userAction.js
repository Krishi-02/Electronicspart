import axios from "axios";
import {
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    LOGIN_FAIL, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    CLEAR_ERROR, 
    REGISTER_USER_FAIL, 
    REGISTER_USER_REQUEST, 
    REGISTER_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS, 
    LOGOUT_SUCCESS, 
    LOGOUT_FAIL} from '../constants/userConstants';

    //login
export const login = (email, password) =>  async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST });
        const config = {headers: {"Content-Type" : "application/json" } };

        const {data} = await axios.post('/account/login', {email, password}, config);
        console.log(data.user);
        dispatch({type: LOGIN_SUCCESS, payload: data});
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

//load user 
export const loadUser = () =>  async (dispatch) => {
    try {
        dispatch({type: LOAD_USER_REQUEST });

        const {data} = await axios.get('/account');

        dispatch({type: LOAD_USER_SUCCESS, payload: data.user});
    }
    catch (error){
        dispatch({type: LOAD_USER_FAIL, payload: error.response.data.message });
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

// get All Users
export const getAllUsers = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_USERS_REQUEST });
      const { data } = await axios.get(`/api/v1/admin/users`);
  
      dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
    }
  };