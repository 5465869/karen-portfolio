import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Country from './country';
import image1 from '../IMG_2633.jpeg';
import '../styles/navbar.css';


const images = array.map(image => {
    return <Country src = {image}/>
});

const Countries = () => {
    return(
    <CardDeck class = 'card-deck'>
        {images}
    </CardDeck>
    );
}

export default Countries;
