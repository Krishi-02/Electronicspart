import React,{Fragment, useEffect, useState} from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {login, clearError} from '../../actions/userAction';
import Loader from '../../components/Loader/loader';

const Login = () => {

    const dispatch = useDispatch(); 
    let history = useHistory();

    const {error, loading, isAuthenticated } = useSelector(state => state.userLogin);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const redirect = location.search ? location.search.split("=")[1] : "/"

  

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email,password));
    }

    useEffect(() => {

        if(error){
            dispatch(clearError());
        }
        if(isAuthenticated){
            history.push("/products");
        }
    }, [isAuthenticated, error, dispatch, history])


  return(
      <Fragment>
      {loading ? (<Loader />) : (
      <section className="main_frame">
           <div className="card_login">
          <form className="form" onSubmit={submitHandler}>
              <h1>Login</h1>
              <div className="control">
                  <label htmlFor="email" className="hidden">Username: </label>
                  <input type="email" required className="email" placeholder="Email" autoCapitalize="off" autoFocus
                onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="control">
                  <label htmlFor="password" className="hidden">Password: </label>
                  <input type="password" required className="password" placeholder="Password" 
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="action_button">
                  <button>Sign In</button>
              </div>
              <div className='register_line'>
                  <Link to="/account/login" className='register_link'>
                    <p className='p_tag'>Forget Password</p>
                  </Link>
              </div>
              <div className="register_line">
                  <Link to="/account/register" className="register_link">
                    <p className="p_tag">Not a registered User? Sign Up Now!</p>
                  </Link>
              </div>
          </form>
      </div>
      </section>
      )}
    </Fragment>
  )
};

export default Login;
