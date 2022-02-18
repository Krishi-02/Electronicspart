import React from "react";
import { Link } from "react-router-dom";
import { FaSearch} from "react-icons/fa"; 
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">Menu</div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <FaSearch className="search_logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/account/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cart">View Cart</Link>
                    </li>
                    <li>
                        <Link to="/products/new">Add Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
