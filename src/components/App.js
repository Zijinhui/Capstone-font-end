import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Signup from './auth/Signup';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart'
import Food from './Menu/Food';
import  Payment from './Payment/Payment';
import Address from './Payment/Address'
import Review from './Payment/Review'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App () {

    const [cart, setCart] = React.useState([])
    const [price,setPrice] = React.useState(0)
   
   //setState([{...state, cart:[...state.cart,]}]])


    React.useEffect(async function(){
        let total = 0
        cart.map(e=>{
            total+= e.price*e.qty
        })
        await setPrice(total)
    },[cart])

    async function handleCart(food){

        let exist = false
        await cart.map(e=> {
            if (e.id===food.id){
                e['qty'] = e.qty+1
                setCart(cart)
                exist = true
            }
        })

        if (!exist){
            setCart([...cart,food])
        }
    }

    async function handleQty(id, amount){
        await cart.map(e=> {
            if (e.id===id){
                e['qty'] = e.qty+amount
                setCart(cart)
            }
        })
        setCart(cart.filter(e=>e.qty!==0))
    }

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/menu' element={<Menu onClick={handleCart}/>} />
                    <Route path='/menu/:type' element={<Food onClick={handleCart}/>} />
                    <Route path='/login' element={<Home />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='cart' element={<Cart food={cart} total={price} onClick={handleQty}/>}/>
                    <Route path='/payment' element={<Payment />}/>
                    <Route path='address' element={<Address />}/>
                    <Route path='/review' element={<Review />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
