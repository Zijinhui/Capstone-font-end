import React from 'react'

function Order(props){
    console.log(props)
    return (
        <div className='order flex'>
            {props.id && <div>
                <>no image yet</>
                {/* <img alt='sushi image'/> */} 
                <div>{props.name}</div>                        
                <div className='flex'>
                    <div className='price'>Price: ${props.price}</div>
                    <div className='price'>Qty: {props.qty}</div>
                    <button onClick={()=>props.onClick(props.id,-1)}>-</button>
                    <button onClick={()=>props.onClick(props.id,1)}>+</button>
                </div>
            </div>}
        </div>
    )
}


export default Order