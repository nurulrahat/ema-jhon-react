import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { Link } from 'react-router-dom';

import "./shop.css"
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setcart] = useState([]);
  //console.log(first10)

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart);
    const productCart = productKeys.map(eachProductKey => {
      const productView = fakeData.find(findCart => findCart.key === eachProductKey)
      console.log(productView)
      productView.quantity = savedCart[eachProductKey]
      return productView;
    })
    setcart(productCart)

  }, [])

  const addCartClick = (product) => {
    //console.log(product.name)
    const sameProduct = cart.find(pd => pd.key === product.key);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      console.log(sameProduct.quantity)
      let others = cart.filter(pd => pd.key !== product.key)
      newCart = [...others, product];
    }
    else {
      product.quantity = count;
      newCart = [...cart, product];
    }
    setcart(newCart);
    console.log(cart)
    // const count=sameProduct.length;
    //cart.quantity=count;
    addToDatabaseCart(product.key, count)
  }
  return (
    <div className="shop-container">
      <div className="product-container">

        {
          products.map(item => <Product key={item.key} product={item} addCartClick={addCartClick}
            showAddCart={true} ></Product>)
        }

      </div>
      <div className="shopCart-container">
        {/* <h2>Added cart {cart.length}</h2> */}
        <Cart cart={cart}>
          <Link to="/order">
            <button className="cartButton"> Order Review</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;