import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';


const ProductDetails = () => {
    
    const {productKey}=useParams()
    const product=fakeData.find(pd=>pd.key===productKey)
    return (
        <div>
            <h1>Product Details</h1>
                <Product showAddCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;