import React from 'react';
import './ShowTestimonial.css'
const ShowTestimonial = (props) => {
    const {img,name,occupation,comment}=props.testimonial
    return (
        <div className="col-md-4 card-group card-container">
            <div className="card text-center testimonial-card">
                <div className="row">
                    <div className="col-md-2">
                        <img src={img} className='rounded-circle p-2' alt="" />
                    </div>
                    <div className="col-md-10">
                    <h5 className="text-color fw-bold mt-3">{name}</h5>
                    <h6>{occupation}</h6>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{comment}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ShowTestimonial;