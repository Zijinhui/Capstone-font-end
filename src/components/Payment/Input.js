import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './paymentForm'

function Input(props) {
    const PUBLIC_KEY = `${process.env.PUBLIC_KEY}`
    const stripeTestPromise = loadStripe(PUBLIC_KEY)

    // Pass display option of Address from Payment to paymentForm
    return(
            <Elements stripe={stripeTestPromise}>   
                <PaymentForm display={props.display}/>
            </Elements>
    )
}

export default Input