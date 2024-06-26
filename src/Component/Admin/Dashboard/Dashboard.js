import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import ShowAppointment from '../ShowAppointment/ShowAppointment';
import ShowOrder from '../showOrder/ShowOrder';
import './Dashboard.css'
const Dashboard = () => {
    const [allOrders, setAllOrders] = useState([])
    const [allAppointments, setAllAppointments] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://sneaky-care-server.onrender.com/getOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [loggedInUser.email])
    useEffect(() => {
        fetch(` https://sneaky-care-server.onrender.com/getAppointment?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAllAppointments(data))
    }, [loggedInUser.email])
    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className='main-items py-5'>
                    <div>
                        <div className="display-6 text-center mb-5">Your Order and Appointment</div>
                        <div className="row">
                            {
                                allOrders.map(order => <ShowOrder key={order._id} order={order}></ShowOrder>)
                            }
                        </div>
                        <div className="row">
                            {
                                allAppointments.map(appointment => <ShowAppointment key={appointment._id} appointment={appointment}></ShowAppointment>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;