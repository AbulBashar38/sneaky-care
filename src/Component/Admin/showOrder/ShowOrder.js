import React from 'react';
import padImg from '../../../image/pad.png'
import './ShowOrder.css'
const ShowOrder = (props) => {
    const { productName, status,name,email } = props.order
    return (
        <div className="col-md-4 col-sm-6 card-group mb-4 card-container">
            <div className="card text-center admin-card">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-4">
                        
                         <img src={padImg} className='p-2' alt="" /> 
                        
                    </div>
                    <div className="col-md-8 col-sm-6 col-8">
                        <h4 className='text-color2 text-end p-2'>{status}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="text-color fw-bold mt-3">{productName}</h5>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowOrder;