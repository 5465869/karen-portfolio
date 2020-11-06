import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Country from './country';
import Jordan from '../jordan.png';
import Lebanon from '../lebanon.png';
import SaudiArabia from '../saudiarabia.png';
import Morocco from '../morocco.png';
import '../styles/navbar.css';
const array = [Lebanon,SaudiArabia,Morocco,SaudiArabia,Morocco, SaudiArabia,Morocco, SaudiArabia,Morocco, SaudiArabia,Morocco, SaudiArabia,Morocco];

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
