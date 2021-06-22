import React, { useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';

const ShopMain = () => {
    const [allProducts,setAllProducts]=useState([])
    useState(()=>{
        fetch('https://morning-caverns-13555.herokuapp.com/getAllProducts')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])
    return (
        <div className='row'>
            {
                allProducts.map(product=><ShowProduct key={product._id} product={product}></ShowProduct>)
            }
        </div>
    );
};

export default ShopMain;