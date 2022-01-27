import React from 'react'

function Order(props){
    console.log(props)
    return (
        <div className='order flex flex-el'>
            <img className='sushi-icon' alt='[image]'/>
            {props.id && <div className='order-details'>
                <div className='order-name'>{props.name}</div>                        
                <div className='flex'>
                    <div className='price'>${props.price}</div>
                    <div className='flex price-change'>
                        <button onClick={()=>props.onClick(props.id,-1)}>-</button>
                        <div className='price'>{props.qty}</div>
                        <button onClick={()=>props.onClick(props.id,1)}>+</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}


export default Order