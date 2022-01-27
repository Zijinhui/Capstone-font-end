import React from 'react'
import MenuNav from './nav'
import {useParams} from "react-router-dom";
import axios from 'axios'
import { CartState } from '../GlobalContext';

function Food (props) {

      const {type} = useParams()
      const [food, setFood] = React.useState([])
      const {dispatch} = CartState()

      React.useEffect(()=>{
        axios.get(`https://sushi-back-end.herokuapp.com/api/food/${type.charAt(0).toUpperCase()+type.slice(1)}`)
        .then(json=> setFood(json.data))
      },[type])

      async function handleChange(food){
        await dispatch({
          type:'ADD_TO_CART',
          payload: {
            food:food
          }
        })
      }

      const display = food.map(e => <div key={e.id}>
                                        <li>{e.image}image</li> 
                                        <li>{e.name}</li>
                                        <li>{e.price}</li>
                                        <li>{e.description}</li>
                                        <button onClick={()=>handleChange(e)}>Add to Cart</button>
                                    </div>)

      return (
          <div>
              <MenuNav />
              {display}
          </div>
      );

}
  
  export default Food;