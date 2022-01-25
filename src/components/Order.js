import React from 'react'

function Order(props){
    return (
        <div className='order flex'>
            <img alt='sushi image'/>
            <div>
                <div>{props.name}</div>                        
                <div className='flex'>
                    <div className='price'>${props.price}</div>
                    <button>-</button>
                    <div className='amount'>{props.amount}</div>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}


export default Order