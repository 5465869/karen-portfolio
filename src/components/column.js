import React from 'react';

import '../styles/gallery.css';

const Column = (props) => {
    return(
      <div style = {props.style} className ="column">
        {props.paintings}
      </div>
     );
}

export default Column;