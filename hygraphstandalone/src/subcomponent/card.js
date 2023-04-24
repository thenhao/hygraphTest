import React, { useState } from 'react';

function Card({ cards, tag }) {

const [count, setCount] = useState(0);
console.log(cards);
  return (<div>
    {cards.map(({ id,url, index}) => (
                <img key={id} src={url} width={250} height={250} alt =""/>
              ))}
              <div dangerouslySetInnerHTML={{__html: tag}}></div>
    </div>);
}

export default Card;