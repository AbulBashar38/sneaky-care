import React from 'react';

const ManageService = (props) => {
    const { serviceDescription, serviceTitle, _id } = props.service;
    const deleteService = () => {
        if (window.confirm(`Do you want to Delete this service?`)) {
            fetch(`https://morning-caverns-13555.herokuapp.com/deleteService/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Delete successful')
                    }
                })
        } else {
            alert('Not Deleted')
        }
    }


return (
    <div className="col-md-4 col-sm-6 card-group card-container">
        <div className="card text-center admin-card">
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