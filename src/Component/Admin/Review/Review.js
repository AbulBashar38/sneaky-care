import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar'
import './Review.css'
const Review = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [testimonial, setTestimonial] = useState({})
    const history = useHistory()
    const handleBlur = (e) => {
        const testimonialInfo = { ...testimonial}
        testimonialInfo[e.target.name] = e.target.value
        setTestimonial(testimonialInfo)
    }
    const addServiceDatabase = (e) => {
        const testimonialData ={...testimonial,img:loggedInUser.photo}
        fetch('https://sneaky-care-server.onrender.com/addTestimonial',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(testimonialData)
        })
        .then(res=>res.json())
        .then(document=>{
            if (document) {
                if (window.confirm(`Thanks for your Comment. Do you want to go Home page`)) {
                    history.replace('/home')
                  } else {
                    history.replace('/admin')
                  }
            }
        })
        e.preventDefault()
    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="main-items review-container">
                    <form className='p-3 shadow-lg' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                        <p className='display-6 text-center text-color'>Give a review about ourself</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-color">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" onBlur={handleBlur} name='name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="btnText" className="form-label fw-bold text-color">Your Occupation</label>
                            <input type="text" className="form-control" id="btnText" onBlur={handleBlur} name='occupation' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold text-color">Write your comment</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onBlur={handleBlur} name='comment'></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={addServiceDatabase} className="btn btn-custom">Add Service</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;