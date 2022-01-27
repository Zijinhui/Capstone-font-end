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
            <img className='sushi-icon' src={props.image} alt='[image]'/>
            {props.food.food.id && <div className='order-details'>
                <div className='order-name'>{props.food.food.name}</div>                        
                <div className='flex'>
                    <div>${props.food.food.price}</div>
                    <div className="price-change flex">
                        <button onClick={()=>handleChange(props.food.food,'DECREMENT_IN_CART')}>-</button>
                        <div>{props.food.qty}</div>
                        <button onClick={()=>handleChange(props.food.food,'INCREMENT_IN_CART')}>+</button>
                    </div> 
                </div>
            </div>}
        </div>
    )
}


export default Order