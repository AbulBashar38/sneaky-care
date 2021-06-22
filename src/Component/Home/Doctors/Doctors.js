import React from 'react';
import DrShana from '../../../image/sahana.png'
import DrSR from '../../../image/SRBegum.jpg'
import DrKohinoor from '../../../image/kohinoor.png'
import ShowDoctors from '../ShowDoctors/ShowDoctors';
const Doctors = () => {

    const doctorsInfo = [
        {
            name: 'Prof. Dr. Shahana Pervin',
            speciality: 'MBBS, DGO, FCPS (Obs & Gynae),National Institute of Cancer Research & Hospital, Mohakhali, Dhaka',
            img: DrShana
        },
        {
            name: 'Prof. Dr. S. R. Begum',
            speciality: 'Senior Consultant, Obstetrics & Gynecology,MBBS, FCPS (Gyn), F1CS',
            img:DrSR
        },
        {
            name: 'Prof. Dr. Kohinoor Begum',
            speciality: 'MBBS, FCPS, Professor of Gynaecology & Obstetrics Department,BANGLADESH MEDICAL COLLEGE & HOSPITAL',
            img:DrKohinoor
        },
    ]
    return (
        <section className='pt-5 mt-5'>
            <div className="container pt-5">
                <h3 className='text-center text-custom text-uppercase text-color'> Our Gynecologist</h3>
                <div className="row">
                    {
                        doctorsInfo.map(doctor=><ShowDoctors key={doctor.img} doctor={doctor}></ShowDoctors>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;