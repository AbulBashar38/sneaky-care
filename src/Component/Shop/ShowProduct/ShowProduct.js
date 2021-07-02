import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ShowProduct.css'
const ShowProduct = (props) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { img, name, brand, price,_id } = props.product;
    const history = useHistory()
    const handleOrder =()=>{
        const checkoutProduct={...loggedInUser,id:_id};
        setLoggedInUser(checkoutProduct)
        history.replace('/checkout')
    }
    return (
        <div className="col-md-3 card-group mb-3 card-container col-sm-6">
            <div className="card text-center" style={{ width: '18rem' }}>
                <img src={img} style={{ width: '250px' }} className="card-img-top mx-auto d-block p-3 img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-color mb-3">{name}</h5>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <p className="card-text">Price: ${price}</p>
                        </div>
                        <div className="col-md-6">
                            <p className="card-text">Brand: {brand}</p>
                        </div>
                    </div>
                    <button className="btn btn-custom align-self-end" onClick={handleOrder}>Order</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;