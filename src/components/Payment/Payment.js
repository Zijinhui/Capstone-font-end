import React from 'react'
import { useState} from 'react'
import Address from './Address'
import Card from './Card'





function Payment() {
    const [dispaly , setDisplay] = useState({
        address: false,
        card: false
    })

    function getCardForm() {
        setDisplay({address:false, card: true})        
    }

    function getBothForm() {
       setDisplay({address: true, card: true}) 
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
              {dispaly.card ? <Card /> : <></>}   
            </div>
            <button>NEXT</button>
        </div>
    )
}

export default Payment