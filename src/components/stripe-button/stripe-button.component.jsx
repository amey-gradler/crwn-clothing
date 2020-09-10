import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HPslbJbrCjjuXI2kTnhWuH0fxrG0mg7KT7VhjP433KCLYbz84Zgw2e2riClMHMVIYYmPVUflXS8Vnus5LKz0qpm00x5zf0OSC';


    const onToken = token => {
    console.log(token);
    alert('Payment Successful') 
    }

    return(
    <StripeCheckout 
    label='Pay Now'
    name='CRWN CLOTHING Ltd.'
    billingAddress
    shippingAddress
    currency='USD'
    image='https://sendeyo.com/up/d/f3eb2117da'
    description = {`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)}

export default StripeCheckoutButton