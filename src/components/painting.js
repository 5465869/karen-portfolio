import React from 'react';
import '../styles/gallery.css';


const Painting = (props) => {
    return(
      <div class="card">
        <img src = {props.src}/>
          <div class = "container">
            <h4><b>{props.title}</b></h4> 
            <p>{props.description}</p>
          </div>
      </div>
     );
}

export default Painting;