import React from 'react'
import axios from 'axios'
import Nav from './nav'

function Menu() {

      const [food,setFood] = React.useState([])

      React.useEffect(async ()=>{
        await axios.get('https://sushi-back-end.herokuapp.com/api/food')
          .then(json => setFood(json.data))
      },[])
      console.log(food)

      //no image yet
      const display = food.map(e=> <div key={e.id}>
                                        <li>{e.image}image</li> 
                                        <li>{e.name}</li>
                                        <li>{e.price}</li>
                                        <li>{e.description}</li>
                                    </div>)

      return (
          <div>
            <Nav />

            {display}

          </div>
      );

}
  
  export default Menu;