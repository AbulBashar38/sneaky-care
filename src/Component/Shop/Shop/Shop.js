import React from 'react';
import Header from '../../Shared/Header/Header';
import ShopMain from '../ShopMain/ShopMain';

const Shop = () => {
    return (
        <section>
            <Header></Header>
            <div className="container">
                <ShopMain></ShopMain>
            </div>
        </section>
    );
};

export default Shop;