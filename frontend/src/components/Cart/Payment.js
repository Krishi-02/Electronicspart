import React from 'react'
import './Payment.css';
import CheckoutSteps from './CheckoutSteps';
import { useSelector, useDispatch} from 'react-redux';

const Payment = ({ history }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);
  return (
    <div>
        <h1>Payment Page</h1>
    </div>
  )
}

export default Payment