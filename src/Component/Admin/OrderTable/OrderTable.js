import React, { useState,useEffect } from 'react';
const OrderTable = () => {
    const [allOrders, setAllOrders] = useState([])
    const [allAppointment, setAllAppointment] = useState([])
    const [currentStatus, setCurrentStatus] = useState(null)
    useEffect(() => {
        fetch('https://morning-caverns-13555.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    useEffect(() => {
        fetch('https://morning-caverns-13555.herokuapp.com/bookingAppointment')
            .then(res => res.json())
            .then(data => setAllAppointment(data))
    }, [])
    const updateStatus = () => {
        fetch(`https://morning-caverns-13555.herokuapp.com/updateStatus/${currentStatus.statusId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStatus: currentStatus.selectedStatus })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service Or Product Name</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((order, index) => (
                            <tr key={order._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.productName}</td>
                                <td>
                                    <select onClick={(e) => {
                                        const statusInfo = {
                                            selectedStatus: e.target.value,
                                            statusId: order._id
                                        }
                                        setCurrentStatus(statusInfo)
                                    }} className='p-2 me-2'>
                                        <option value="Pending">Pending</option>
                                        <option value="Done">Done</option>
                                        <option value="On going">On going</option>
                                    </select>
                                    <button className="btn btn-custom" onClick={updateStatus}>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                    {
                        allAppointment.map((appointment, index) => (
                            <tr key={appointment._id}>
                                <th scope="row">Appointment</th>
                                <td>{appointment.name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.subject}</td>
                                <td>
                                    <select onClick={(e) => {
                                        const statusInfo = {
                                            selectedStatus: e.target.value,
                                            statusId: appointment._id
                                        }
                                        setCurrentStatus(statusInfo)
                                    }} className='p-2 me-2'>
                                        <option value="Pending">Pending</option>
                                        <option value="Done">Done</option>
                                        <option value="On going">On going</option>
                                    </select>
                                    <button className="btn btn-custom" onClick={updateStatus}>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;