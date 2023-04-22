import React,  { useState } from 'react';
import Card from './card';

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

    // Read the number of titles to produce
    //each containing its own cards
    //button to toggle cards
    //put button inside of the div
    //write function to toggle show and set title to know which title it is at

    //next:
    //use html tags as text to display cards

    //{((titleValue==title)&&(buttonState))
    return (
        <div>
            {titles.map(({id, title, image})=>(
                <div>
                    <div key={id}>{title} <button onClick={()=>toggle(title)}>{((titleValue==title)&&(buttonState)) ? '-' : '+'}</button></div>
                    {((titleValue==title)&&(buttonState)) ? <Card cards={image}/> : '' }
                </div>
            ))}
        </div>
    );


}

export default TitleHeaders;
