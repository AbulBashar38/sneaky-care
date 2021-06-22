import React from 'react';
import FreedomBanner from '../../../image/FreedomBrand.jpg';
import JoyaBanner from '../../../image/JoyaBrand.png';
import WhisperBanner from '../../../image/whisper.jpg';
import ShowBrand from '../ShowBrand/ShowBrand';
const AllBrand = () => {
    const brandInfo=[
        {
            img:FreedomBanner,
            brand:'Savlon Freedom Sanitary Napkin'
        },
        {
            img:JoyaBanner,
            brand:'Joya Sanitary Napkin'
        },
        {
            img:WhisperBanner,
            brand:'Whisper Sanitary Pads'
        },
    ]
    return (
        <main>
            <div className='mt-5 pt-5 mb-5'>
                <div className="container">
                    <h4 className='text-center text-uppercase mb-4 text-color2'>Our Brands</h4>
                    <div className="row mt-5">
                        {
                            brandInfo.map(info=><ShowBrand key={info.img} info={info}></ShowBrand>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllBrand;