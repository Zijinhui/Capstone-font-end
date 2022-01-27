import React from 'react';

function Home() {
      return (
        <div className="home">
          <h1>Home</h1>
          <p>[Sushi restaurant]</p>
          <p>We are open on Mondays, from 4-6 pm</p>
          <p>All are welcome, except for those that don't like sushi</p>
          <img src={require('../img/sleeping.gif')} className="sleep-sushi"/>
          <h2>About Us</h2>
          <p>Our team of highly qualified professional</p>
        </div>
      );

}
  
  export default Home;