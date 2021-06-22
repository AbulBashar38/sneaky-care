import React from 'react';
import { useHistory } from 'react-router-dom';
import './ShowService.css'
const ShowServices = (props) => {
    const { img, serviceDescription, serviceTitle, serviceBtn } = props.service;
    const history = useHistory()
    const handleServiceBtn=()=>{
        if (serviceBtn==='Buy Pad') {
            history.replace('/shop')
        }
        if (serviceBtn==='Take Appointment') {
            history.replace('/appointment')
        }
        if (serviceBtn==='Check Offer') {
            history.replace('/offer')
        }
    }
    
    return (
        <div className="col-md-4 card-group card-container">
            <div className="card text-center card-style">
                <img src={img} className="card-img-top mx-auto d-block p-3" alt="..." />
                <div className="card-body">
                    <h5 className="text-color2 mb-3 hover-style">{serviceTitle}</h5>
                    <p className="card-text">{serviceDescription}</p>
                    <button className="btn btn-custom align-self-end" onClick={handleServiceBtn}>{serviceBtn}</button>
                </div>
            </div>
        </div>
    );
};

export default ShowServices;