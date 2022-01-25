import React from 'react'
import MenuNav from './nav'
import {useParams} from "react-router-dom";
import axios from 'axios'

const Food  = ()=> {

      const {type} = useParams()
      console.log(type.charAt(0).toUpperCase()+type.slice(1))
      const [food, setFood] = React.useState([])

      React.useEffect(()=>{
        axios.get(`https://sushi-back-end.herokuapp.com/api/food/${type.charAt(0).toUpperCase()+type.slice(1)}`)
        .then(json=> setFood(json.data))
      },[type])

      const display = food.map(e => <div key={e.id}>
                                        <li>{e.image}image</li> 
                                        <li>{e.name}</li>
                                        <li>{e.price}</li>
                                        <li>{e.description}</li>
                                    </div>)

      return (
          <div>
              <MenuNav />
              {display}
          </div>
      );

}
  
  export default Food;