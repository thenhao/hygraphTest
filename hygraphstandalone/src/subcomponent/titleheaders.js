import React from 'react';
import Card from './card';

function TitleHeaders({titles}){

    console.log(titles);

    // Read the number of titles to produce
    //each containing its own cards

    //next:
    //button to toggle cards
    //use html tags as text to display cards
    return (
        <div>
            ({titles.map(({id, title, image})=>(
                <div>
                    <div key={id}>{title}</div>
                    <Card cards={image}/>
                </div>
            ))})
        </div>
    );


}

export default TitleHeaders;
