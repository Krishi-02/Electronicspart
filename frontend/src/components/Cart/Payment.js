import React, { Fragment } from 'react'
import './Payment.css';
import CheckoutSteps from './CheckoutSteps';
import { useSelector, useDispatch} from 'react-redux';
import MetaData from '../MetaData';
import axios from 'axios';
import {createOrder, clearErrors} from '../../actions/orderAction';


const Payment = ({ history }) => {

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    const dispatch = useDispatch();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const paymentData = {
      amount: Math.round(orderInfo.totalPrice * 100),
    };

    const order = {
      shippingInfo,
      orderItems: cartItems,
      itemsPrice: orderInfo.subtotal,
      taxPrice: orderInfo.tax,
      shippingPrice: orderInfo.shippingCharges,
      totalPrice: orderInfo.totalPrice,
    };

    const submitHandler = async(e) => {
      e.preventDefault();
    }
    
  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2}/>
      <div className='paymentContainer'>
        <form>
          <input />
        </form>
      </div>
    </Fragment>
  )
}
export default Payment