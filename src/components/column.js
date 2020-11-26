import React from 'react';

import '../styles/gallery.css';

const Column = (props) => {
    return(
      
      <div class="column">
        {props.paintings}
      </div>
     );
}

export default Column;