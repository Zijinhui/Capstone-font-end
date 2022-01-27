import React from 'react'
import { CartState } from '../GlobalContext';

function Order(props){

    const {dispatch} = CartState()

    function handleChange(food, type) {
        dispatch({
            type: type,
            payload:food
        })
    }

    return (
        <div className='order flex flex-el'>
            <img className='sushi-icon' src={props.image} alt='[image]' width='85px'/>
            {props.food.food.id && <div>
                <div className='order-name'>{props.food.food.name}</div>                        
                <div className='flex'>
                    <div className='price price-change'>${props.food.food.price}</div>
                    <button onClick={()=>handleChange(props.food.food,'DECREMENT_IN_CART')}>-</button>
                    <div className='price'>{props.food.qty}</div>
                    <button onClick={()=>handleChange(props.food.food,'INCREMENT_IN_CART')}>+</button>

                </div>
            </div>}
        </div>
    )
}


export default Order