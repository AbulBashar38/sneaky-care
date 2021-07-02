import axios from 'axios';
import React, { useState } from 'react';

const AddAProduct = () => {
    const [productInfo,setProductInfo]=useState({});
    const [productImg,setProductImg]=useState(null);
    const handleBlur = (e) => {
        const newProduct = { ...productInfo };
        newProduct[e.target.name] = e.target.value;
        setProductInfo(newProduct)
    }
    const UploadInImgbb = (e) => {
        const imageData = new FormData();
        imageData.set('key', '68b6ff580c83ca61463a6d6da0adcd4d');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setProductImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    const addProductDatabase = (e) => {
        const productData ={...productInfo,img:productImg}
        fetch('https://morning-caverns-13555.herokuapp.com/addAProduct',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        e.preventDefault()
    }
    return (
        <form className='shadow-lg p-3'>
            <p className='display-6 text-center text-color'>Add new product</p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-color">Product Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onBlur={handleBlur} name='name' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="priceInput" className="form-label fw-bold text-color">Price</label>
                <input type="text" className="form-control" id="priceInput" onBlur={handleBlur} name='price' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="priceText" className="form-label fw-bold text-color">Brand name</label>
                <input type="text" className="form-control" id="priceText" onBlur={handleBlur} name='brand' required/>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label fw-bold text-color">Add product Image</label>
                <input className="form-control" type="file" id="formFile" onChange={UploadInImgbb} required/>
            </div>
            <div className="text-center">
                <button type="submit" onClick={addProductDatabase} className="btn btn-custom">Add product</button>
            </div>

        </form>
    );
};

export default AddAProduct;