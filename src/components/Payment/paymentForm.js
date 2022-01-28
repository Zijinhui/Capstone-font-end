import React, {useState} from 'react'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

export default function PaymentForm (props){

    const [success,setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const [info, setAddress] = useState({
        first_name:"",
        last_name:"",
        phone:"",
        street: "",
        apt: "",
        city: "",
        state: "",
        zip: "" 
    })

    function updateAddress (e) {      
        setAddress({...info, [e.target.name]: e.target.value})
        //console.log(e.target)
    }
    //console.log(address)

    const showAddress = () => {
        return(
            <div className="address-form">   
                <div className="name">
                    <label>First Name</label> 
                    <input type="text" name="first_name" onChange={updateAddress} />     
                    <label>Last Name</label> 
                    <input type="text" name="last_name" onChange={updateAddress} />                             
                </div >

                <div className="address-row">
                    <label>Street</label> 
                    <input type="text" name="street" onChange={updateAddress} />   
                    <label >Apt(optional)</label> 
                    <input type="text" name="apt" onChange={updateAddress}/>                                        
                </div>
                <div className="city">
                    <label>City</label> 
                    <input type="text" name="city" onChange={updateAddress} />
                    <label>State</label> 
                    <input type="text" name="state" onChange={updateAddress} />                                
                </div>
                <div>
                    <label>Zip</label> 
                    <input type="text" name="zip" onChange={updateAddress} /> 
                    <label>Phone</label> 
                    <input type="text" name="phone" onChange={updateAddress} />                               
                </div>    
                
            
        </div>
        )
    }
    
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
        //props.updateAddress(true)
        console.log(info)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        
        if(!error) {
            try {
                const {id} = paymentMethod
                await axios.post("https://sushi-back-end.herokuapp.com/payment", {amount: 100, id})
                .then((res)=> {
                    console.log(res)
                    console.log(res.data)
                    if(res.data.success===false) {
                    console.log("Successful payment")
                    setSuccess(true)
                }})
                .catch((err)=> console.log(err))
            
            }catch(error){
                console.log("Error",error)
            }
        } else {
            console.log(error.message)
        }
    }

    const showCard = () => {
        return (
            <>
            {!success ? 
            
               <div className="card-input">
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button className="pay-btn" >Pay</button>
               </div>
                :
                <div>
                    <h2>   Thanks for your phurchasing! </h2>
              <h2>We will notice you when the store accept your order!</h2>
                    <img src={require('../../img/thank-you.gif')} className="thx-img"/>
                </div> 
            }
            </>
        )
    }

 
    return (   
        <>
        <form onSubmit={handleSubmit} className="payment-form" align="center">
            {(props.display.address && success===false) && showAddress() }
            {props.display.card && showCard() } 
        </form>
        </>
    )
}
