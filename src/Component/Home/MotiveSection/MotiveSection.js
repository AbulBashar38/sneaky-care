import React from 'react';
import womanImg from '../../../image/afraidPic.jpg'
import './MotiveSection.css'
const MotiveSection = () => {
    return (
        <section className='container mt-5 pt-3'>
            <h4 className='text-center text-color2'>OUR MOTIVE</h4>
            <div className="row mt-5">
                <div className="col-md-5 motiveImg">
                    <img src={womanImg} style={{ height: '450px', width: 'auto' }} alt="" className="img-fluid rounded" />
                </div>
                <div className="col-md-7">
                    <p className='display-6 text-center text-color'>We want the rural woman of Bangladesh to be healthy.</p>
                    <div className="ms-3">
                        <small>
                            Most of the time we notice that woman in rural areas have more problems with <strong className='text-color'>menstruation</strong> than in urban areas. They can't even tell their family members about their problems. Adults cannot buy sanitary napkins in the market or from different shops due to public shame. In doing so, they use dirty clothes. As a result, they are constantly afflicted with various diseases and they feel ashamed to go to any doctor.
                        </small>
                        <br />
                        <br />
                        <small>
                            Through our website we will deliver more products including <strong className='text-color'>Sanitary Napkins</strong> to different areas of the village at a <strong className='text-color'>limited time</strong> at <strong className='text-color'>low cost</strong>.
                            We will help the girls of the village to get treatment for various diseases.
                        </small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MotiveSection;