import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSearch} from "react-icons/fa"; 
import {logout} from '../../actions/userAction';
import { useDispatch, useSelector} from "react-redux";
import "./Header.css";
import {FiShoppingCart} from 'react-icons/fi';

function Header() {

    const dispatch = useDispatch();
    let history = useHistory();
    const {user, isAuthenticated} = useSelector(state => state.user)

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const logoutHandler = () => {
        dispatch(logout())
        // history.push("/account/login");
    }

    return (
        <header className="header">
            <Link to="/">
            <div className="logo">SHOP</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <FaSearch className="search_logo"/>
                        </Link>
                    </li>
                    {isAuthenticated ? (
                        <li>
                            <button className="log_button" onClick={logoutHandler} >Logout</button>
                        </li>
                    ):(
                        <li>
                            <Link to="/account/login">Sign In</Link>
                        </li>
                    )}
                    <li>
                        <Link to="/cart" className="cart_link">
                            <FiShoppingCart/><span>Cart</span>
                        </Link>
                    </li>
                    {/* {isAuthenticated(
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    )} */}
                        {/* <li>
                          <Link to="/products/new">Add Product</Link>
                      </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
