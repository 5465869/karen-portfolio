import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Country from './country';
import image1 from '../IMG_2633.jpeg';
import image2 from '../IMG_2634.jpeg';
import image3 from '../IMG_2635.jpeg';
import image4 from '../IMG_2645.jpeg';

const array =[image1,image1,image2,image3,image4,image1,image1,image2,image3,image4]

const images = array.map(image => {
    return <Country title = 'TITLE' description = 'DESCRIPTION' src = {image}/>
});

const Countries = () => {
    return(
    <div style = {{display:'flex',flexFlow:'column wrap',height:'100rem',maxWidth:'100%'}}>
        {images}
    </div>
    );
}

export default Countries;
