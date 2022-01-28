import React from 'react';
import Order from './Order';
import { CartState } from '../GlobalContext';
import { Navigate } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'

function Cart(props) {

      const {state:{cart,price},dispatch} = CartState()

      const display = cart.map(e=> <Order key={e.food.id} food={e} image={e.food.image}/>)

      const history = useNavigate()
      function handleClick(){
        if (cart.length>0){
          dispatch({
            type:'SET_FINALPRICE',
            price:(price*0.08875+price).toFixed(2)
          })
          history('/payment')
        }
      }
      
      return (
        // <div>
        //     <div className='order-heading flex'>
        //         <div className='yourorder flex-el'>Your Order</div>
        //     </div>
        //     <div className='order-list'>
        //         {display}
        //     </div>
        //     <div className='order-heading'>
        //       <div className='text-center'>Total: ${price}</div>
        //       <button className='check-out' onClick={()=>handleClick()}>Check Out</button>
        //     </div>
        // </div>

        <div className="cart">
         
         <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                   
                <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th  class="border-0 bg-light">
                        <div class="p-2 px-3 text-uppercase">Your cart</div>
                        </th>
                    </tr>
                    </thead>

                    <thead>
                    <tr>
                        <th scope="col" class="border-0 ">
                        <div>
                        {display}
                          </div>
                        </th>                           
                    </tr>
                    </thead>
                </table>
                </div>
                   
                </div>
                </div>
                <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div class="p-4">
                    <p class="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>${price.toFixed(2)}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>{price>=15||price===0? '$'+0: '$'+5.00}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>${(price*0.08875).toFixed(2)}</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                        <h5 class="fw-bold">${(price*0.08875+price).toFixed(2)}</h5>
                        </li>
                    </ul><button onClick={()=>handleClick()} class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
      );

}
  
  export default Cart;