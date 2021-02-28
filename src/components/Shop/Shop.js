import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';

import "./shop.css"
const Shop = () => {
  const first10=fakeData.slice(0,10);
  const [products,setProducts]= useState(first10);
  const [cart, setcart]=useState([]);
//console.log(first10)
const addCartClick=(product)=>{
  console.log(product.name)
  const newCart=[...cart,product];
  setcart(newCart);

}
  return (
<div className="shop-container">
  <div className="product-container">

  {
    products.map(item=><Product product={item} addCartClick={addCartClick}
    ></Product>)
  }  
 
  </div>
  <div className="shopCart-container">
  {/* <h2>Added cart {cart.length}</h2> */}
  <Cart cart={cart}></Cart>
  </div>
</div>
    );
};

export default Shop;