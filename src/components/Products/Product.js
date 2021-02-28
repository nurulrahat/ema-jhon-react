import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';

const Product = (props) => {
    //console.log(props.product.name);
    const { name, img, price, seller, stock, feature } = props.product;
    return (
        <div className="product">
            <div className="imageCls">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="nameCls">{name}</h3>
                <p className=""><small></small>by: {seller}</p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button className="cartButton" onClick={()=>props.addCartClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>

        </div>
    );
};

export default Product;