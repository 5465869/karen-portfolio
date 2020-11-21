import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const imgStyle = {
  display: 'block',
  width: '100%',
  height: 'auto'
}
const Painting = (props) => {
    return(
      <Card style={{marginBottom:'.75rem',width:'300px'}}>
        <Card.Img style={imgStyle} variant="top" src={props.src} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        
      </Card.Body>
      </Card>);
}

export default Painting;