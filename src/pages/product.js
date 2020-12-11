
import ProductPainting from '../components/productPainting.js';
import '../styles/gallery.css';
import Column from '../components/column';
import Button from 'react-bootstrap/Button'
import React, { useState,useEffect} from 'react';
import { useMediaQuery } from 'react-responsive'
import ImageViewer from '../components/ImageViewer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function Product (props){
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  let { id } = useParams();

  const [artwork, setPainting] = useState({})
  const [loadingA, setLoadingA] = useState(true);
  const [errorA, setErrorA] = useState(null);
  const [isLightBox,setLightBox] = useState(false);


  function handleClick(event){
    setLightBox(!isLightBox);
  }

  

    useEffect(() => {
      // By moving this function inside the effect, we can clearly see the values it uses.
      async function fetchProduct() {
       
        try {
          setLoadingA(true);
          const response = await fetch('https://frozen-lowlands-07363.herokuapp.com/images/'+id.toString())
          const json = await response.json();
          setPainting(json);
  
        } catch (e) {
          setErrorA(e);
        } finally {
          setLoadingA(false);
        }
        
      }
  
      fetchProduct();
    }, [id]); // ✅ Valid because our effect only uses productId
    // ...
    

  return loadingA ? "Loading..." : (
      
      <>
      {isLightBox ? <ImageViewer  onClose = {handleClick} src = {artwork.results[0].image_path} title = {artwork.results[0].image_title}/> : null}
      {isDesktopOrLaptop && <h1 style = {{textAlign:'center',paddingTop:'3rem',color:'black',marginBottom:'3rem'}}>{artwork.results[0].image_title}</h1>}
      <div className = 'row product'>
      
        <Column paintings = {[<ProductPainting onChange = {handleClick} id = {artwork.results[0].id}src = {artwork.results[0].image_path} title = {artwork.results[0].image_title} description =  {artwork.results[0].image_size}/>]}/>
        {isDesktopOrLaptop && <div className = 'column info' >
          <h2>Specifications</h2>
          <p>{artwork.results[0].image_size}</p>
          
          <div style = {{display:'block',textAlign:'center',maxWidth:'50%',borderRadius:'25px',color:'black'}}>
            <div style = {{padding:'20px 20px 20px 20px'}}>
              
              <Button style = {{backgroundColor:'black', border:'none',color:'white',minWidth:'100px'}}>Add to cart</Button>
            </div>
          </div>
        </div>}
        

      </div>
      
      
       
        
      </>
    );
  
}

export default Product;