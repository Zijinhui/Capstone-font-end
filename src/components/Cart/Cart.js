import React from 'react';
import Order from './Order';
import { CartState } from '../GlobalContext';
import { useNavigate} from 'react-router-dom'

function Cart(props) {

      const {state:{cart,price}} = CartState()

      const display = cart.map(e=> <Order key={e.food.id} food={e} image={e.food.image}/>)

      const history = useNavigate()
      function handleClick(){
        if (cart.length>0){
          history('/payment')
        }
      }
      
      return (
        <div>
            <div className='order-heading flex'>
                <div className='yourorder flex-el'>Your Order</div>
            </div>
            <div className='order-list'>
                {display}
            </div>
            <div className='total'>Total: ${price}</div>
            <button className='checkout' onClick={()=>handleClick()}>Check Out</button>
        </div>
      );

}
  
  export default Cart;