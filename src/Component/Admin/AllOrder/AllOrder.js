import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderTable from '../OrderTable/OrderTable';

const AllOrder = () => {

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="main-items">
                    <div className="display-6 text-center">All Orders and Appointments</div>
                    <OrderTable></OrderTable>
                </div>
            </div>
        </div>
    );
};

export default AllOrder;