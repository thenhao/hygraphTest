import React,  { useState } from 'react';
import DisplayCard from './card';

function TitleHeaders({titles}){

    const [titleValue, setTitleValue]= useState('');
    const [buttonState, setButtonState]= useState(false);

    function toggle(title){

        if(titleValue != title){
            setTitleValue(title);
            setButtonState(true);
            return;
        }else{
            setButtonState(false);
        }

        setButtonState(!buttonState);
        setTitleValue(title);
    }

    console.log(titles);

    //Read the number of titles to produce
    //each containing its own cards
    //button to toggle cards
    //put button inside of the div
    //write function to toggle show and set title to know which title it is at
    //update api to include text for html
    //use html tags as text to display cards
    //setting the div as dangerous html
    //next:use card to show dev work ?
    // currently it cannot detect the card from the package
    // dangerous inner html only takes in basic tags for now

    return (
        <div>
            {titles.map(({id, title, image, htmlTag})=>(
                <div>
                    <div key={id}>{title} <button onClick={()=>toggle(title)}>{((titleValue==title)&&(buttonState)) ? '-' : '+'}</button></div>
                    {((titleValue==title)&&(buttonState)) ? <DisplayCard cards={image} tag={htmlTag}/> : '' }
                </div>
            ))}
        </div>
    );


}

export default TitleHeaders;
