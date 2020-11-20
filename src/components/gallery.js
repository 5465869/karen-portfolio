import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Painting from './painting';
import image1 from '../IMG_2633.jpeg';
import image2 from '../IMG_2634.jpeg';
import image3 from '../IMG_2635.jpeg';
import image4 from '../IMG_2645.jpeg';

const array =[image1,image1,image2,image3,image4,image1,image1,image2,image3,image4]

const images = array.map(image => {
    return <Painting title = 'TITLE' description = 'DESCRIPTION' src = {image}/>
});

const Gallery = () => {
    return(
   // <div style = {{display:'flex',flexFlow:'column wrap',height:'100rem',maxWidth:'100%'}}>
     //   {images}
    //</div>
    <Container>
        <Row>
            <Col>{images[0]}</Col>
            <Col>{images[1]}</Col>
            <Col>{images[2]}</Col>
        </Row>
        <Row>
            <Col>{images[0]}</Col>
            <Col>{images[1]}</Col>
            <Col>{images[2]}</Col>
        </Row>
    </Container>
    );
}

export default Gallery;
