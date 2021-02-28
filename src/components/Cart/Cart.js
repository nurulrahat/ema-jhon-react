import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
         total = total + cart[i].price;

    }
    return (
        <div>
            <h3>Order Summary:</h3>
            <p>Ordered Item:{cart.length}</p>
            <p>total price:{total}</p>
        </div>
    );
};

export default Cart;