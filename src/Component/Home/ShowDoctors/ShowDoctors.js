import React from 'react';
import './ShowDoctor.css'
const ShowDoctors = (props) => {
    const {name,speciality,img}=props.doctor;
    return (
        <div className='col-md-4 card-group mt-5 card-container'>
        <div className="card shadow  text-center doctor-card-style">
            <img src={img} className="p-5 card-img-top img-fluid rounded" alt="..." />
            <div className="card-body">
                <h3 className="card-title text-color">{name}</h3>
                <p className='card-text'>{speciality}</p>
            </div>
        </div>
    </div>
    );
};

export default ShowDoctors;