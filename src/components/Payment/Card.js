import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './paymentForm'

function Card(props) {
    const PUBLIC_KEY = `${process.env.PUBLIC_KEY}`
    const stripeTestPromise = loadStripe(PUBLIC_KEY)
   //const [stripePromise, setStripePromise] = useState(() => loadStripe(PUBLIC_KEY))

    return(
            <Elements stripe={stripeTestPromise}>
    
                <PaymentForm />

            </Elements>
    )
}

export default Card