import React, {useEffect} from 'react';
import './Home.css';
import Product from './Product.js';
import MetaData from "../MetaData";
import {getProduct} from '../../actions/productAction';
import { useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const {loading, error, products} = useSelector(
    (state) => state.products);
    // console.log(products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);
  

    <MetaData title="ECOMMERCE"/>
  return <div className="home">
      <div className="banner">
          <img 
          src="https://www.jjsmanufacturing.com/hs-fs/hubfs/Blog%20Images%202021/AdobeStock_242997308-1.jpeg?width=400&name=AdobeStock_242997308-1.jpeg"
          className="photo1"
          alt=""/>
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUvJ6pn4SNLQj4562YlhU1aD3MMujjZVYPA&usqp=CAU"
          className="photo2"
          alt=""/>
      </div>

      <div className="featured_product"></div>
      <h5 className="home_heading">Featured Products</h5>

      <div className="container">
          {products && products.map((product) => (
          <Product 
          key={product._id} 
          // name={product.name}
          // description={product.description}
          // price={product.price}
          // imageUrl={product.imageUrl}
          // productId={product._id}
          product={product}
          />))}
      </div>

  </div>
  };

export default Home;
