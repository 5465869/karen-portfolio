
import '../styles/gallery.css';
import { Link } from "react-router-dom";
import React, { useState,useEffect} from 'react';
import { useMediaQuery } from 'react-responsive'
import Button from 'react-bootstrap/Button'
function Painting(props){
  const [loaded, setLoaded] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 799px)' })
  

    return (
      <div>
        {loaded ? null :
          <div
            className = 'card'
            style={{
              background: 'grey',
              height: '400px',
              width: '400px'
            }}
          />
        }
        <Link style={{ textDecoration: 'none', color:'black'}} to={{pathname:`/product/${props.id}`, src : props.src, title:props.title,description:props.description}}>
          <div id = {props.id} className="card" style = {props.style}>
            <img style={loaded ? {} : {display: 'none'}} src={props.src} onLoad={() => setLoaded(true)}/>
             <div className="container">
              <h5><b>{props.title}</b></h5>
              <p>{props.description}</p>
              {isTabletOrMobile && <Button style = {{backgroundColor:'white', border:'none',color:'black',minWidth:'100px',borderStyle:'solid'}}>Add to cart</Button>}
            </div>
            
          </div>
        </Link>
      </div>
    );
  
}

export default Painting;