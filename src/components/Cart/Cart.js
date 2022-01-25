import React from 'react';
import Order from './Order';


function Cart() {
      return (
        <div>
            <div className='flex'>
                <h1 className='heading'>Your Order</h1>
                <button className='clearbutton'>Clear cart</button>
            </div>
            <div className='order-list'>
                <Order name="California Roll" price="5.00" amount="1"/>
                <Order name="Boston Roll" price="1" amount="1"/>
            </div>
            <div className='total'>Total: $4.50</div>
            <button className='checkout'>check out</button>
        </div>
      );

}
  
  export default Cart;