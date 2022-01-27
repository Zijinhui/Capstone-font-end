import React, {useState} from 'react'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

// {/* <form onSubmit={handleSubmit}> */}
// <CardElement options={CARD_OPTIONS}/>
// {/* <button>Pay</button>
// </form> */}

export default function PaymentForm (){

    const [success,setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [input, setInput] = useState("")

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        console.log(elements.CardNumberElement)

        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("https://sushi-back-end.herokuapp.com/payment", {
                    amount: 1000,
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
        }
    }

 
    return (
        <>
    
        {!success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button className="pay-btn">Pay</button>
            </form>
            :
            <div>
                <h2>   Thanks for your phurchasing! 
We will notice you when the store accept your order!</h2>
                <img src={require('../../img/thank-you.gif')}/>
            </div> 
        }

        </>
    )
}