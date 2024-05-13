import React, { useState } from 'react';
import ShowProduct from '../ShowProduct/ShowProduct';

const ShopMain = () => {
    const [allProducts,setAllProducts]=useState([])
    useState(()=>{
        fetch('https://sneaky-care-server.onrender.com/getAllProducts')
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