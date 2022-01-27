import React from 'react'
import { useState} from 'react'
import Address from './Address'
import Card from './Card'
import { Navigate} from 'react-router-dom'


function Payment() {
    const [dispaly , setDisplay] = useState({
        address: false,
        card: false,
        redirect: false
    })

    function getCardForm() {
        setDisplay({address:false, card: true})        
    }

    function getBothForm() {
       setDisplay({address: true, card: true}) 
    }
    function jumpToReview() {
        setDisplay({address: false, card: true})
    }
    if (dispaly.redirect) {
        return (<Navigate to='/Review/'/>)
    }

    return (
        <div>
            <h1>Payment</h1>
            <div className="payment-sheet">
                <div>
                    <button onClick={() => getCardForm()}>Pick Up</button>
                    <button onClick={() => getBothForm()}>Delivery</button>
                </div>
            </div>
            <div>
              {dispaly.address ? (<Address/>) : <></>}  
              {dispaly.card ? 
                <div>
                    <Card />
                    <button onClick={() => jumpToReview()}>CONTINUE TO LAST STEP</button>
                </div>
               : <></>
               }   
            </div>
            
        </div>
    )
}

export default Payment