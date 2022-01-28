import React, {useEffect,useState }from 'react'
import axios from 'axios'
import Nav from './nav'
import { CartState } from '../GlobalContext';

function Menu(props) {


      const [menu,setMenu] = useState([])
      const {dispatch} = CartState()


    useEffect(async()=>{
        await axios.get('https://sushi-back-end.herokuapp.com/api/food')
        .then(json => setMenu(json.data))
    },[])


    function handleChange(food){
      dispatch({
        type:'ADD_TO_CART',
        payload: {
          food:food
        }
      })
    }

      const display = menu.map(e=> <div className='sushi' key={e.id}>
                                       <li><img className='menuImage' src={e.image}></img></li> 
                                         <li>{e.name}</li>
                                       <li>${e.price}</li>
                                        <li>{e.description}</li>
                                         <button className="addCartButton" onClick={()=>handleChange(e)}>Add to Cart</button>
                                    </div>)

      return (
          <div>
            <Nav />
            <div className='sushis'>{display}</div>
          </div>
      );

}
  
  export default Menu;