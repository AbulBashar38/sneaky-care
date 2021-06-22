import React from 'react';
import { useHistory } from 'react-router-dom';
import homeImg from '../../../image/allPad.png'
import './MainDisplay.css'
const MainDisplay = () => {
    const history = useHistory()
    const goShop =()=>{
        history.replace('/shop')
    }
    const takeAppointment =()=>{
        history.replace('/appointment')
    }
    return (
        <main style={{height:'500px',width:'100%'}} className='d-flex align-items-center justify-content-center mt-5'>
            <div className='row'>
                <div className="col-md-4 offset-md-1 home-text">
                    <h1 className='fw-bold mb-4 text-color'>Your privacy is not your Shyness</h1>
                    <p>To protect your privacy, it is very easy to consult a gynecologist at home with pads, sanitary napkins. We are always ready to help you.</p>
                    <button className="btn btn-custom" onClick={goShop}>Shop</button>
                    <button className="btn btn-custom ms-4" onClick={takeAppointment}>Appointment</button>
                </div>
                <div className="col-md-6 bannerImg">
                    <img src={homeImg} style={{ height: '350px'}} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default MainDisplay;