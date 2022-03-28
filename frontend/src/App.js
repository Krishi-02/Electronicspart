import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import React, { useState } from "react";
import WebFont from 'webfontloader';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NewProduct from "./components/seller/NewProduct";
import Login from './components/User/Login';
import ProductDetails from './components/Product/ProductDetails';
import Register from "./components/User/Register";
import store from './store';
import { loadUser } from "./actions/userAction";
import Shipping from "./components/Cart/Shipping";
import Cart from './components/Cart/Cart';
import Profile from './components/User/Profile';
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Dashboard from "./components/Admin/Dashboard.js"
import { useSelector } from "react-redux";
import axios from "axios";
import Payment from './components/Cart/Payment';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrder from './components/Order/MyOrder';
import OrderList from './components/Admin/OrderList';
import ProductList from './components/Admin/ProductList';
import UserList from "./components/Admin/UserList";


function App() {

  // const {isAuthenticated, user} = useSelector((state) => state.user)
  // const [sideToggle, setSideToggle] = useState(false);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    // store.dispatch(loadUser());
  },[])

  return (
    <Router>
    <main className="app">
        <Switch>
          <Route path="/account/login" component={Login}>
          </Route>
          <Route path="/account/register">
            <Header/>
            <Register />
          </Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/products/new" component={NewProduct}>
          </Route>
          <Route exact path="/account" component={Profile}></Route>
          <Route exact path="/account/shipping" component={Shipping}></Route>
          <Route exact path="/order/confirm" component={ConfirmOrder}></Route>
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/success" component={OrderSuccess} />
          <Route exact path="/orders" component={MyOrder}/>
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path = "/products/:id/relatableProducts"/>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/users" component={UserList} />
          <Route exact path="/admin/products" component={ProductList}/>
          <Route exact path="/admin/orders"component={OrderList}/>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </main>
    </Router>
  );
}

export default App;
