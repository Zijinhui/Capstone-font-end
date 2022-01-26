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

    const updateStreet = (e) => {
        setAddress({...address, street: e.target.value})
        console.log(address.street)
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
                    <input type="text" name="street" value={address.street} onChange={updateStreet} />                               
                </div>
                <div className="apt">
                    <label >Apt(optional)</label> 
                    <input type="text" name="apt" value={address.apt} onChange={updateStreet}/>                      
                </div>
                <div className="city">
                    <label>City</label> 
                    <input type="text" name="city" value={address.city} onChange={updateStreet} />                               
                </div>
                <div className="state">
                    <label>State</label> 
                    <input type="text" name="state" value={address.state} onChange={updateStreet} />                               
                </div>
                <div className="zip">
                    <label>Zip</label> 
                    <input type="text" name="zip" value={address.zip} onChange={updateStreet} />                               
                </div>
        
            </form>

        </div>
    )
}

export default Address