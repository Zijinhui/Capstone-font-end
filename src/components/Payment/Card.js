import React, {useState} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}



const PUBLIC_KEY = "pk_test_51KM1pjL937qYPF70Y3OoumxOhuN1uMzfHAnkNHfXptLhCkYy4SwmDdE1hPZ6YfIJbrrXD3WaAbnAyZlFUWUK2sse00X5WQrbKp"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function Card() {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        /*const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amout: 1000,
                    id
                })
    
                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
            
            }catch(error){
                console.log("Error",error)
            }
        } else {
            console.log(error.message)
        }*/
    }
    

    return(
            <Elements stripe={stripeTestPromise}>
            <div>
             
                <form onSubmit={handleSubmit}>
                    <CardElement options={CARD_OPTIONS}/>
                    <button>Pay</button>
                </form>
            
                </div>
            </Elements>
    )
}

export default Card