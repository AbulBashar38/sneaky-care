import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SimpleCard from './SimpleCard';
const stripePromise = loadStripe('pk_test_51IwSw1FVkMvrQEWP2WMTI941DGaaTP72LCOwtJ8qB3XmLcWkccBdUkSI9hZu6DmiKrB5eYUatJ2EBEx5KS1RKH1a009zT9dMTS');

const CardForm = () => {
    

    return (
        <Elements stripe={stripePromise}>
            <SimpleCard />
        </Elements>
    );
};

export default CardForm;