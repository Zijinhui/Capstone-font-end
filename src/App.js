import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Auth/Signup';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart'
import Food from './components/Menu/Food';
import  Payment from './components/Payment/Payment';
import Address from './components/Payment/Address'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App () {

    const [cart, setCart] = React.useState([])
    const [price,setPrice] = React.useState(0)



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
                </Route>
            </Routes>
        </Router>
    )
}

export default App;
