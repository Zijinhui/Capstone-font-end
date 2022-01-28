import React from 'react'
import { useState} from 'react'
import Input from './Input'
import Review from './Review'
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
            <Review />
            <h1>Payment</h1>
            <div>
                <div className="option-btns">
                    <button className="option-btn" onClick={() => getCardForm()}>Pick Up</button>
                    <button className="option-btn" onClick={() => getBothForm()}>Delivery</button>
                </div>
            </div>
            <div>
              {display.card ? <div><Input display={display}/></div> : <></>}   
            </div>            
        </div>
    )
}

export default Payment
