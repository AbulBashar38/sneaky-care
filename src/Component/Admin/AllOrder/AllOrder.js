import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import OrderTable from '../OrderTable/OrderTable';
import './AllOrder.css'
const AllOrder = () => {

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="main-items">
                    <div className="display-6 text-center">All Orders and Appointments</div>
                    <div className='orderTable'>
                        <OrderTable></OrderTable>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllOrder;