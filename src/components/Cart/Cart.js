import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    let quantity =0;
    for (let i = 0; i < cart.length; i++) {
         total = total + cart[i].price*cart[i].quantity;
          quantity = quantity+cart[i].quantity  
    }
    return (
        <div>
            <h3>Order Summary:</h3>
            <p>Ordered Item: {cart.length}</p>
            <p>Ordered Quantity: {quantity}</p>
            <p>total price:{total}</p>
           {
               props.children
           }
            
        </div>
    );
};

export default Cart;