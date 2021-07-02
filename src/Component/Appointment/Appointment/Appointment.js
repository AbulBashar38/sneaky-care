import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar'
import ShowAppoint from '../ShowAppointment/ShowAppoint';
const Appointment = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch(' https://morning-caverns-13555.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="main-items">
                    <h1 className='text-center'>Available Appointments on {new Date().toDateString()}</h1>
                    <div className="container">
                        <div className="row mt-5">
                            {
                                appointments.map(appointment => <ShowAppoint key={appointment._id} appointment={appointment}></ShowAppoint>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;