import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const ShowAppoint = (props) => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history =useHistory()
    const {subject,visitingHour,doctorName,_id}=props.appointment;
    const handleAppointment =()=>{
        loggedInUser.id=_id
        history.replace('/checkout')
    }
    return (
        <div className="col-md-4 card-group">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-color">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{doctorName}</p>
                    <button onClick={handleAppointment} className="btn btn-custom">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ShowAppoint;