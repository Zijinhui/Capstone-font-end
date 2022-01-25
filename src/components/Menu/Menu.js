import React from 'react'
import axios from 'axios'

function Menu() {

      const [food,setFood] = React.useState([])
      const foods = React.useContext(food) //idk if need it here

      React.useEffect(async ()=>{
        await axios.get('https://sushi-back-end.herokuapp.com/api/food')
          .then(json => setFood(json))
      },[])
      console.log(food)

      return (
          <div>
            <h1>Hi</h1>
          </div>
      );

}
  
  export default Menu;