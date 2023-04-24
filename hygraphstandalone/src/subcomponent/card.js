import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'

function DisplayCard({ cards, tag }) {

const [count, setCount] = useState(0);
console.log(cards);
  return (<div>
    {cards.map(({ id,url, index}) => (
                <img key={id} src={url} width={250} height={250} alt =""/>
              ))}
              <Card dangerouslySetInnerHTML={{__html: tag}}></Card>
    </div>);
}

export default DisplayCard;