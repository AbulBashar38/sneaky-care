import axios from 'axios';
import React, { useState } from 'react';

const AddAService = () => {
    const [serviceInfo, setServiceInfo] = useState({})
    const [imgUrl, setImgUrl] = useState(null)

    const handleBlur = (e) => {
        const newService = { ...serviceInfo };
        newService[e.target.name] = e.target.value;
        setServiceInfo(newService)
    }

    const UploadInImgbb = (event) => {
        const imageData = new FormData();
        imageData.set('key', '68b6ff580c83ca61463a6d6da0adcd4d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    } 

    const addServiceDatabase = (e) => {
        const serviceData ={...serviceInfo,img:imgUrl}
        fetch('https://morning-caverns-13555.herokuapp.com/addAService',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                alert('New service added')
            }
        })
        e.preventDefault()
    }
    return (
        <form className='p-3 shadow-lg'>
            <p className='display-6 text-center text-color'>Add new Service</p>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label fw-bold text-color">Service title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onBlur={handleBlur} name='serviceTitle' />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold text-color">Service description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onBlur={handleBlur} name='serviceDescription'></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="btnText" className="form-label fw-bold text-color">Button Text</label>
                <input type="text" className="form-control" id="btnText" onBlur={handleBlur} name='serviceBtn' />
            </div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label fw-bold text-color">Add service Image</label>
                <input className="form-control" type="file" id="formFile" onChange={UploadInImgbb} />
            </div>
            <div className="text-center">
                <button type="submit" onClick={addServiceDatabase} className="btn btn-custom">Add Service</button>
            </div>

        </form>
    );
};

export default AddAService;