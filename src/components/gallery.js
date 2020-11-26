import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Painting from './painting';
import Column from './column'
import image1 from '../images/IMG_2633.jpeg';
import image2 from '../images/IMG_2634.jpeg';
import image3 from '../images/IMG_2635.jpeg';
import image4 from '../images/IMG_2662.jpeg';
import image5 from '../images/IMG_2063.jpeg';
import image6 from '../images/IMG_2630.jpeg';
import image7 from '../images/IMG_2632.jpeg';
import image8 from '../images/IMG_2636.jpeg';
import image9 from '../images/IMG_2637.jpeg';
import image10 from '../images/IMG_2638.jpeg';
import image11 from '../images/IMG_2639.jpeg';
import image12 from '../images/IMG_2640.jpeg';
import image13 from '../images/IMG_2641.jpeg';
import image14 from '../images/IMG_2643.jpeg';
import image15 from '../images/IMG_2645.jpeg';
import image16 from '../images/IMG_2649.jpeg';
import image17 from '../images/IMG_2669.jpeg';
import image18 from '../images/IMG_2652.jpeg';
import image19 from '../images/IMG_2653.jpeg';
import image20 from '../images/IMG_2655.jpeg';
import image21 from '../images/IMG_2656.jpeg';
import image22 from '../images/IMG_2657.jpeg';
import image23 from '../images/IMG_2658.jpeg';
import image24 from '../images/IMG_2659.jpeg';
import image25 from '../images/IMG_2687.jpeg';
import image26 from '../images/IMG_2663.jpeg';
import image27 from '../images/IMG_2664.jpeg';
import image28 from '../images/IMG_2665.jpeg';
import image29 from '../images/IMG_2666.jpeg';
import image30 from '../images/IMG_2667.jpeg';
import '../styles/gallery.css';
const array =[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21]

const images = array.map(image => {
    return <Painting title = 'Fayetteville landscapes' description = 'Old Maine oil on canvas 5x7' src = {image}/>
});

const col1 = <Column paintings = {images.slice(0,Math.floor(images.length/3))}/>
const col2 = <Column paintings = {images.slice(Math.floor(images.length/3),Math.floor(images.length/3) + Math.floor(images.length/3))}/>
const col3 = <Column paintings = {images.slice(Math.floor(images.length/3) + Math.floor(images.length/3),images.length)}/>


const Gallery = () => {
    return(
        <>
        <h1 style = {{color:"black",textAlign:'center',marginTop:'10px',fontSize:'100px'}}>Gallery</h1>
    <div class="row">
        {col1}
        {col2}
        {col3}
    </div>
 
</>
    );
}

export default Gallery;
