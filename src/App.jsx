import React from 'react';
import data from "./data.jsx"
import Header from './Header.jsx';
import Card from './Card.jsx';

console.log(data);
export default function App (){
  const cards =data.map(el => {
    return(
      <Card 
      key={el.id}
      {...el}

      />
    ) })

  
  return(

    <div className="container row col">
      <Header />
      {cards}
    </div>
  )
}