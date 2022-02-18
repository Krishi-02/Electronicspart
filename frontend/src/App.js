import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import { useState } from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NewProduct from "./components/seller/NewProduct";
import Login from './components/User/Login';
import ProductDetails from './components/Product/ProductDetails';
import Register from "./components/User/Register";


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
    <main className="app">
        <Switch>
          <Route path="/account/login">
            <Header />
            < Login />
          </Route>
          <Route path="/account/register">
            <Header/>
            <Register />
          </Route>
          <Route path="/cart">
            <h1>Cart page</h1>
          </Route>
          <Route path="/products/new">
            <NewProduct />
          </Route>
          {/* <Route path="/products">

          </Route> */}
          <Route path="/products/:id" component={ProductDetails}/>
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
