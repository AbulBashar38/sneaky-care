import React from 'react';
import AppointmentImg from '../../../image/appointment.png'
import './ShowAppointment.css'
const ShowAppointment = (props) => {
    const {name,email,subject,status}=props.appointment
    return (
        <div className="col-md-4 col-sm-6 card-group mb-4 card-container">
            <div className="card text-center admin-card">
                <div className="row">
                    <div className="col-md-4 col-4">

                        <img src={AppointmentImg} className='p-2' alt="" />

                    </div>
                    <div className="col-md-8 col-8">
                        <h4 className='text-color2 text-end p-2'>{status}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="text-color fw-bold mt-3">{subject}</h5>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowAppointment;