import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Painting from './painting';
import image1 from '../IMG_2633.jpeg';
import image2 from '../IMG_2634.jpeg';
import image3 from '../IMG_2635.jpeg';
import image4 from '../IMG_2662.jpeg';
import '../styles/gallery.css';
const array =[image1,image1,image2,image3,image4,image1,image1,image2,image3,image4]

const images = array.map(image => {
    return <Painting title = 'TITLE' description = 'DESCRIPTION' src = {image}/>
});

const Gallery = () => {
    return(
        <div class="row">
  <div class="column">
    <img src={image4}/>
    <img src={image1}/>
    <img src={image4}/>
    <img src={image1}/>
    <img src={image3}/>
    <img src={image2}/>
    <img src={image1}/>
  </div>
  <div class="column">
    <img src={image4}/>
    <img src={image3}/>
    <img src={image2}/>
    <img src={image3}/>
    <img src={image1}/>
    <img src={image1}/>
  </div>
  <div class="column">
    <img src={image3}/>
    <img src={image4}/>
    <img src={image1}/>
    <img src={image1}/>
    <img src={image2}/>
    <img src={image1}/>
    <img src={image3}/>
  </div>
  <div class="column">
    <img src={image2}/>
    <img src={image4}/>
    <img src={image3}/>
    <img src={image1}/>
    <img src={image2}/>
    <img src={image2}/>
  </div>
</div>
    );
}

export default Gallery;
