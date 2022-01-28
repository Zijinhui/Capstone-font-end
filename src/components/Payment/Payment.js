import React from 'react'
import { useState} from 'react'
import Input from './Input'
//import { Navigate} from 'react-router-dom'


function Payment() {
    const [display , setDisplay] = useState({
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
              {display.card ? <div><Input display={display}/></div> : <></>}   
            </div>            
        </div>
    )
}

export default Payment