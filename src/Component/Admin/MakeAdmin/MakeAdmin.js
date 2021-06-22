import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [adminEmail,setAdminEmail]=useState({})
    const handleBlur = (e) => {
        const newAdmin={...adminEmail};
        newAdmin[e.target.name]=e.target.value
        setAdminEmail(newAdmin)
    }
    const addNewAdmin =(e)=>{
        fetch('https://morning-caverns-13555.herokuapp.com/addAAdmin',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(adminEmail)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        e.preventDefault()
    }
    return (
        <main>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className='p-5'>
                        <form className='p-5'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-color">Admin email</label>
                                <input type="email" className="form-control w-75" id="exampleInputEmail1" onBlur={handleBlur} name='adminEmail' />
                            </div>
                            <button className="btn btn-custom" type='submit' onClick={addNewAdmin}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MakeAdmin;