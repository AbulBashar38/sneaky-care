import React from 'react';

const AddAOffer = () => {
    return (
        <form className='p-3 shadow-lg' style={{ backgroundColor: 'white', borderRadius: '20px' }}>
            <p className='display-6 text-center text-color'>Currently Disabled</p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">offer title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">offer description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label fw-bold">Add offer Image</label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" className="btn btn-primary" disabled>Submit</button>
        </form>
    );
};

export default AddAOffer;