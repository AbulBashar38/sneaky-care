import React from 'react';

const ManageService = (props) => {
    const { serviceDescription, serviceTitle, _id} = props.service;
    const deleteService=()=>{
        fetch(`https://morning-caverns-13555.herokuapp.com/deleteService/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="col-md-4 card-group">
            <div className="card text-center" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-color2 mb-3">{serviceTitle}</h5>
                    <p className="card-text">{serviceDescription}</p>
                    <button className="btn btn-danger align-self-end" onClick={deleteService}>Delete Service</button>
                </div>
            </div>
        </div>
    );
};

export default ManageService;