import React from 'react';
import {Link} from "react-router-dom";
import {StarRatings } from 'react-rating-stars-component'
import './Home.css';


const Product = ({ name, imageUrl, description, price, productId, ratings}) => {
    const options = {
        edit:false, 
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 3,
        isHalf : true, 
        value: ratings,
    };
    
  return (
    <div className="productCard">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>
        
        
        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">₹{price}</p>

        <Link to={`/products/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  )
};

export default Product;
