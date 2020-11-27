
import React from 'react';


const DisplayImage = (props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <img src = {props.src}/>
            <p>{props.description}</p>
        </div>
    );

}

export default DisplayImage;
