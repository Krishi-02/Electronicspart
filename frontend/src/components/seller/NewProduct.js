import React from 'react';
import NewProductForm from './NewProductForm';
import './NewProduct.css';
import { useHistory } from "react-router-dom";

const NewProduct = () => {


  // function addProducthandler(productData){
  //   fetch('/products/new',{
  //     method: 'POST',
  //     body: JSON.stringify(productData),
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //   }
  //   ).then(() => {
  //     history.push("/products");
  //   })
  // };

  // const addProducthandler = async(productData) => {
  //   await axios.post("/products/new", {
  //     name: productData.name,
  //     description: productData.description,
  //     price: productData.price, 
  //     category: productData.category,
  //     countInStock: productData.countInStock,
  //     imageUrl: productData.imageUrl
  //   }).then(res => {
  //     console.log(res);
  //     history.push("/products")
  //   }).catch(err => {
  //     console.log(err);
  //   });
  //}
  return (
  <section>
    <h1 className="section-heading">Add New Product</h1>
    <div className="main">
    <NewProductForm />
    </div>
  </section>
  );
};

export default NewProduct;
