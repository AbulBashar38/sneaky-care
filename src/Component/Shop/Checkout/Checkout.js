import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import './Checkout.css'
import { useHistory } from 'react-router-dom';
const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderedItem, setOrderedItem] = useState({})
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const history = useHistory()

    useEffect(() => {
        fetch(`https://sneaky-care-server.onrender.com/orderedProduct/${loggedInUser.id}`)
            .then(res => res.json())
            .then(data => setOrderedItem(data))
    }, [loggedInUser.id])
    const onSubmit = data => {
        const OrderInfo = { ...data,brand:orderedItem.name?loggedInUser.brand:'', date: new Date(), status: "Pending",type:orderedItem.name?'pad':'appointment' }
        fetch(orderedItem.name?'https://sneaky-care-server.onrender.com/addOrder':' https://sneaky-care-server.onrender.com/addAppointment', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(OrderInfo)
        })
        .then(res=>res.json())
        .then(document=>{
            if (document) {
                if (window.confirm(`${orderedItem.name?'Order':'Appointment'} is successful. Go to the Dashboard`)) {
                    history.replace('/admin')
                  } else {
                    history.replace('/home')
                  }
            }
        })
    };
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className="checkout-container">
                    <form className='shadow-lg p-3' style={{ backgroundColor: 'white', borderRadius: '20px' }} onSubmit={handleSubmit(onSubmit)}>
                        <p className='display-6 text-center text-color'>Confirm Your Order</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-color">Your Name</label>
                            <input className="form-control" id="exampleInputEmail1" {...register("name", { required: true })} defaultValue={loggedInUser.name} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold text-color">Your Email</label>
                            <input type="email" className="form-control" id="btnText" {...register("email", { required: true })} defaultValue={loggedInUser.email} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="btnText" className="form-label fw-bold text-color">{orderedItem.name?'Product Name':'Subject'}</label>
                            <input className="form-control" id="btnText" {...register(orderedItem.name?"productName":'subject', { required: true })} defaultValue={orderedItem.name?orderedItem.name:orderedItem.subject}  />
                            {errors.productName && <span>This field is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="btnText" className="form-label fw-bold text-color">{orderedItem.price?'Price':'Doctor Fee'}</label>
                            <input {...register(orderedItem.price?"price":'fee', { required: true })} className="form-control" id="btnText" defaultValue={orderedItem.price?orderedItem.price:orderedItem.fee} />
                            {errors.price && <span>This field is required</span>}
                        </div>
                        <div>

                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-custom">Place Order</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Checkout;