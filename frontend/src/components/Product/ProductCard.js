import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import './ProductCard.css';

const ProductCard = ({ name, imageUrl, description, price, productId, ratings}) => {
    const options = {
        edit:false, 
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 2.5,
        isHalf : true, 
    };
  return (
    <div className="productCard">
    <img src={imageUrl} alt={name} />

    <div className="product__info">
      <p className="info__name">{name}</p>
      
      <div>
        <ReactStars {...options}/><span>(256 Reviews)</span>
      </div>
      <p className="info__description">{description.substring(0, 100)}...</p>

      <p className="info__price">₹{price}</p>

      <Link to={`/products/${productId}`} className="info__button">
        View
      </Link>
    </div>
  </div>
  )
}

export default ProductCard