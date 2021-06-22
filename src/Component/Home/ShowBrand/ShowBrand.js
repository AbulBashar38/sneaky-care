import React from 'react';
import './ShowBrand.css'
const ShowBrand = (props) => {
    const { img, brand } = props.info
    return (
        <div className='col-md-4 card-group card-container'>
            <div className="card shadow brand-card-style">
                <img src={img} className="card-img-top mx-auto d-block img-fluid rounded" alt="..." />
                <div className="card-body">
                    <h3 className="card-title text-center">{brand}</h3>
                </div>
            </div>
        </div>
    );
};

export default ShowBrand;