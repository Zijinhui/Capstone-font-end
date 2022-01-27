import React from 'react'
import { useState } from 'react'

function Address(props) {

    const [address, setAddress] = useState({
        street: "",
        apt: "",
        city: "",
        state: "",
        zip: "" 
    })

    function updateStreet (e) {
        setAddress({...address, [e.target]: e.target.value})
        console.log(e.target.value)
    }

   const handleSubmit = (e) => {
        e.preventDefault()
        alert(address.street)
    }

    return(
        <div className="address-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Street</label> 
                    <input type="text" name="street" onChange={updateStreet} />                               
                </div>
                <div className="apt">
                    <label >Apt(optional)</label> 
                    <input type="text" name="apt" onChange={updateStreet}/>                      
                </div>
                <div className="city">
                    <label>City</label> 
                    <input type="text" name="city" onChange={updateStreet} />                               
                </div>
                <div className="state">
                    <label>State</label> 
                    <input type="text" name="state" onChange={updateStreet} />                               
                </div>
                <div className="zip">
                    <label>Zip</label> 
                    <input type="text" name="zip" onChange={updateStreet} />                               
                </div>
        
            </form>

        </div>
    )
}

export default Address