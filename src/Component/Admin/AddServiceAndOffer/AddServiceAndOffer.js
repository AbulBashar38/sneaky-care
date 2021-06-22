import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AddAOffer from '../AddAOffer/AddAOffer';
import AddAProduct from '../AddAProduct/AddAProduct';
import AddAService from '../AddAService/AddAService';

const AddServiceAndOffer = () => {
    return (
        <div className='row' style={{backgroundColor:'#fff1fa',height:'900px'}}>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <AddAService></AddAService>
                    </div>
                    <div className="col-md-6 p-5">
                        <AddAOffer></AddAOffer>
                    </div>
                    <div className='mx-5'>
                        <AddAProduct></AddAProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServiceAndOffer;