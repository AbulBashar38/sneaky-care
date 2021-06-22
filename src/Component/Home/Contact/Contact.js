import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className="contact-container">
                <div className='container pt-5'>
                    <h3 className='text-color text-center text-uppercase'>Always connect with us</h3>
                    <div className=''>
                        <form className=''>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input type="email" className="form-control" placeholder=' Email Address*' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Subject</label>
                                <input type="text" className="form-control" placeholder='Subject*' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Send your massage</label>
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div>
                            <button type="submit" className="btn btn-custom">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;