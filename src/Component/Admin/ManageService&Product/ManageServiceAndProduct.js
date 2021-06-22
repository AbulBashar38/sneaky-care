import React,{ useEffect, useState }  from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ManageService from '../ManageService/ManageService';

const ManageServiceAndProduct = () => {
    const [servicesData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://morning-caverns-13555.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <p className="display-6 text-color text-center">Services</p>
                <div className='my-5'>
                    <div className="row">
                        {
                            servicesData.map(service =><ManageService key={service._id} service={service}></ManageService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceAndProduct;