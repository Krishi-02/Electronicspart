import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; 
import {composeWithDevTools} from "redux-devtools-extension";
import { newProductReducer, productReducer, productDetailsReducer} from "./reducers/productReducer";
import {cartReducer} from './reducers/cartReducer';
<<<<<<< Updated upstream
import {userReducer} from './reducers/userReducer'
import {newOrderReducer} from './reducers/orderReducer';
=======
import {userReducer,allUsersReducer} from './reducers/userReducer';
import {allOrdersReducer, orderReducer} from './reducers/orderReducer';

>>>>>>> Stashed changes

const reducer = combineReducers({
    products: productReducer,
    newProduct: newProductReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    user: userReducer,
<<<<<<< Updated upstream
    newOrder: newOrderReducer,
=======
    allOrders: allOrdersReducer,
    order: orderReducer,
    allUsers:allUsersReducer
>>>>>>> Stashed changes
});

let initialState={
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
};

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;

