import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Country = (props) => {
    return(
      <Card style={{maxWidth:'300px',marginBottom:'.75rem',flexShrink:'3'}}>
        <Card.Img style={{ maxWidth: '300px',height:'auto', display:'inline-block'}} variant="top" src={props.src} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        
      </Card.Body>
      </Card>);
}

export default Country;