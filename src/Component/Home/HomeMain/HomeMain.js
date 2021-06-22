import React from 'react';
import Header from '../../Shared/Header/Header';
import MainDisplay from '../MainDisplay/MainDisplay';
import './HomeMain.css';
const HomeMain = () => {
    return (
        <div className='homeMain'>
            <Header></Header>
            <MainDisplay></MainDisplay>
        </div>
    );
};

export default HomeMain;