import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, seller, stock, feature, key } = props.product;
    return (
        <div className="product">
            <div className="imageCls">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="nameCls"><Link to={"/product/" + key}>{name}</Link></h3>
                <p className=""><small></small>by: {seller}</p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                {props.showAddCart === true && <button className="cartButton" onClick={() => props.addCartClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}

            </div>

        </div>
    );
};

export default Product;