import React, { useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';
import './Services.css'
import { useEffect } from 'react';
const Services = () => {
    const [servicesData, setServiceData] = useState([])
    useEffect(()=>{
        fetch('https://sneaky-care-server.onrender.com/getServices')
        .then(res=>res.json())
        .then(data=>setServiceData(data))
    },[])
    return (
        <section className='mt-5 pt-5'>
            <div className="mt-3 serviceContainer">
                <div className="container pt-5">
                    <h4 className='text-center text-uppercase pt-5 text-color fw-bold'>Services that we Provide</h4>
                    <div className="row mt-5 pt-3 pb-5 ">
                        {
                            servicesData.map(service => <ShowServices key={service._id} service={service}></ShowServices>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;