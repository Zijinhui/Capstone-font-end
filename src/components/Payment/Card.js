import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './paymentForm'

function Card(props) {

    const PUBLIC_KEY = "pk_test_51KM1pjL937qYPF70Y3OoumxOhuN1uMzfHAnkNHfXptLhCkYy4SwmDdE1hPZ6YfIJbrrXD3WaAbnAyZlFUWUK2sse00X5WQrbKp"
    const stripeTestPromise = loadStripe(PUBLIC_KEY)
   //const [stripePromise, setStripePromise] = useState(() => loadStripe(PUBLIC_KEY))

    return(
            <Elements stripe={stripeTestPromise}>
    
                <PaymentForm />

            </Elements>
    )
}

export default Card