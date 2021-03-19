import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import successImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';
const Order = () => {
    const [cart, setCart] = useState([])
    const [orderItem, setOrderItem] = useState(false)
    const history =useHistory()

    const removeProduct = (key) => {
        console.log('Removing', key)
        const dueCart = cart.filter(item => item.key !== key);
        setCart(dueCart)
        removeFromDatabaseCart(key)
    }
    //handle Place Order
    // const handlePlaceOrder = () => {
    //     setCart([])
    //     processOrder()
    //     setOrderItem(true)
    // }

    const handleOrderProcess = () => {
        history.push("/shipment")
    }

    useEffect(() => {
        const savedCart = getDatabaseCart()//here getDatabaseCart return an object
        console.log(savedCart)
        const productKeys = Object.keys(savedCart)//Object.keys()-returns an array of property name string
        console.log(productKeys)
        // const count = productKeys.map(key =>savedCart[key])
        // console.log(count)
        const productCart = productKeys.map(eachProductKey => {
            const productView = fakeData.find(findCart => findCart.key === eachProductKey)
            productView.quantity = savedCart[eachProductKey]
            return productView;
        })
        setCart(productCart)
        console.log(cart)
    }, [])


    let orderSucceeded
    if (orderItem) { orderSucceeded = <img src={successImage} /> }
    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h2>Ordered Item: {cart.length}</h2> */}
                {cart.map(pd => <Reviewitem product={pd} removeProduct={removeProduct}></Reviewitem>)
                }
                {orderSucceeded}
            </div>
            
            <div className="shopCart-container">
                <Cart cart={cart}></Cart>
                {/* <button className="cartButton" onClick={handlePlaceOrder}>Place Order</button> */}
                <button className="cartButton" onClick={handleOrderProcess}>Order Process</button>
            </div>
        </div>
    );
};

export default Order;