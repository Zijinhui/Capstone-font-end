import React from 'react';
import Order from './Order';


function Cart(props) {

      console.log(props)

      const display = props.food? props.food.map(e=>
                         <Order key={e.id} id={e.id} name={e.name} price={e.price} qty={e.qty} onClick={props.onClick}/>):
                         <Order key={props.food.id} id={props.food.id} name={props.food.name} price={props.food.price} qty={props.food.qty} onClick={props.onClick}/>

      return (
        <div>
            <div className='flex'>
                <h1 className='heading'>Your Order</h1>
                <button className='clearbutton'>Clear cart</button>
            </div>
            <div className='order-list'>
                {display}
            </div>
            <div className='total'>Total: ${props.total}</div>
            <button className='checkout'>check out</button>
        </div>
      );

}
  
  export default Cart;