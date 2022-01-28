import React from 'react'
import { CartState } from '../GlobalContext';
import { Button } from 'react-bootstrap'

function Order(props){

    const {dispatch} = CartState()

    function handleChange(food, type) {
        dispatch({
            type: type,
            payload:food
        })
    }

    return (
        <tbody>
            <tr>
                <th scope="row" class="border-0">
                <div class="p-2">
                    <img src={props.image} alt='[image]' width="350" class="img-fluid rounded shadow-sm" />
                     <div class="ms-3 d-inline-block align-middle">
                    <h5 class="mb-0"><a href="#" class="text-dark d-inline-block align-middle">{props.food.food.name}</a></h5>
                    </div>
                    </div>
                </th> 

                <td class="border-0 align-middle"><strong>${props.food.food.price}</strong></td>
                
                <Button className='cartBtn' onClick={()=>handleChange(props.food.food,'DECREMENT_IN_CART')}>-</Button>
                <td class="border-0 align-middle"><strong>{props.food.qty}</strong></td>
                <Button className='cartBtn2' onClick={()=>handleChange(props.food.food,'INCREMENT_IN_CART')}>+</Button>
            </tr>
        </tbody>
        
    )
}


export default Order