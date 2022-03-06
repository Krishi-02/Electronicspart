import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from '../../actions/productAction';
import {addtoCart} from '../../actions/cartAction';
import './ProductDetails.css'
import Header from '../Header/Header';
import Product from '../Home/Product';
import ReactStars from 'react-rating-stars-component';

const ProductDetails = ({match, history}) => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails)
  const products = useSelector((state) => state.products)
  const { loading, error, product } = productDetails
  console.log(product);

  useEffect(() => {
    if(product && match.params.id !== product._id){ 
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch]);

  const addToCartHandler = () => {
    dispatch(addtoCart(product._id, qty));
    console.log("Item added to cart");
    history.push("/cart");
  };

  return(
    <div>
      <Header/>
    <div className="productscreen"> 
    {loading ? (
      <h2>Loading...</h2>
    ) : error ? (
      <h2>{error}</h2>
    ) : (
      <>
        <div className="productscreen__left">
          <div className="left__image">
           { product && product.imageUrl && <img src={product.imageUrl} alt={product.name} className="image"/>}
          </div>
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: ₹{product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
        <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>₹{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
      </>
    )}
     </div>
     <div className='relatable_products'>
            <h1 className='rproducts_h1'>Relatable Products</h1>

          </div>
     </div>
  );
};

export default ProductDetails;
