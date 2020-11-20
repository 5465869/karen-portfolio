import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Country = (props) => {
    return(
      <Card style={{ maxWidth: '18rem', height: '100%', minWidth: '18rem'}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>);
}

export default Country;