import React from 'react'
import { CartState } from '../Global';

function Order(props){

    console.log(props.food.food)

    const {dispatch} = CartState()

    function handleChange(food, type) {
        dispatch({
            type: type,
            payload:food
        })
    }

    return (
        <div className='order flex flex-el'>
            <img alt='[image]'/>
            {props.food.food.id && <div>
                <div>{props.food.food.name}</div>                        
                <div className='flex'>
                    <div className='price'>${props.food.food.price}</div>
                    <button onClick={()=>handleChange(props.food.food,'DECREMENT_IN_CART')}>-</button>
                    <div className='price'>{props.food.qty}</div>
                    <button onClick={()=>handleChange(props.food.food,'INCREMENT_IN_CART')}>+</button>
                </div>
            </div>}
        </div>
    )
}


export default Order