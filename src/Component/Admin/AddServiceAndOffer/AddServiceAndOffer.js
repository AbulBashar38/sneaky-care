import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AddAOffer from '../AddAOffer/AddAOffer';
import AddAProduct from '../AddAProduct/AddAProduct';
import AddAService from '../AddAService/AddAService';

const AddServiceAndOffer = () => {
    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="row main-items">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <AddAService></AddAService>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <AddAOffer></AddAOffer>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-4'>
                        <AddAProduct></AddAProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServiceAndOffer;