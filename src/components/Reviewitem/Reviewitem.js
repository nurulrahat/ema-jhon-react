import React from 'react';


const Reviewitem = (props) => {
    const { name, quantity, price, key, img } = props.product
    //const { removeProduct } = props.removeProduct
    const reviewStyle = {
        margin: '20px 40px',
        border: '1px solid grey',
        padding: '5px',
        width: '600px'
    }


    return (

        <div className="product">
            <div className="imageCls">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="nameCls">{name}</h3>
                <p> Quantity :{quantity}</p>
                <p>Price:{price}</p>
                <button className="cartButton" onClick={() => props.removeProduct(key)}>Remove</button>
            </div>
        </div>



    );
};

export default Reviewitem;