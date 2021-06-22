import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllBrand from '../AllBrand/AllBrand';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import HomeMain from '../HomeMain/HomeMain';
import MotiveSection from '../MotiveSection/MotiveSection';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <HomeMain></HomeMain>
            <MotiveSection></MotiveSection>
            <Services></Services>
            <AllBrand></AllBrand>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;