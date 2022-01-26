import React from 'react'
import { useState} from 'react'
import Address from './Address'
function Payment() {
    const [dispaly , setDisplay] = useState({
        address: false,
        card: false
    })
    //const formList = []
    function getCardForm() {
        setDisplay({...dispaly, card: true})     
    }

    function getBothForm() {
       setDisplay({address: true, card: true})
    }

    /*const display = formList.map((form) =>{
        console.log(form)
        return(
        <div>{form}</div>
        )}) */
    //console.log(display)

    const layout =()=> {
        if (dispaly.address === true && dispaly.card === true) {
            return (
                <div>
                     <Address />
                     <Address />
                </div>
               
            )
        }
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
              {layout()}
            
            </div>
            <button>NEXT</button>
        </div>
    )
}

export default Payment