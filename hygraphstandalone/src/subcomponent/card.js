import React from 'react';

function Card({ cards }) {
console.log(cards);
  return (<div>
   {cards.map(({ id,url }) => (
                <img key={id} src={url} width={250} height={250} alt =""/>
              ))}
    </div>);
}

export default Card;