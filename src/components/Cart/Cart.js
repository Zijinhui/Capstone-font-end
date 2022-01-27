import React from 'react';
import Order from './Order';
import { CartState } from '../Global';

function Cart(props) {

      const {state:{cart,price}} = CartState()

      const display = cart.map(e=> <Order key={e.food.id} food={e}/>)
      
      return (
        <div>
            <div className='order-heading flex'>
                <div className='yourorder flex-el'>Your Order</div>
            </div>
            <div className='order-list'>
                {display}
            </div>
            <div className='total'>Total: ${price}</div>
            <button className='checkout'>check out</button>
        </div>
      );

}
  
  export default Cart;