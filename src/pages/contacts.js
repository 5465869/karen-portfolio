import React from 'react';
import ReactUploadImage from '../components/imageUploader';
import '../styles/heroImage.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
const Hero = (props) => {
  const styles = {
    backgroundImage: "url('https://res.cloudinary.com/hm408jhub/image/upload/v1607142877/rcmjbe9numnpltdjhtzo.jpg')",
    backgroundSize: 'cover',
    justifyContent: 'center',
    textAlign: 'center',
    height:'100vh',
    color:'white',
    alignItems:'center'

  }  
  return(
    <Jumbotron fluid style = {styles}>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button href = 'http://localhost:3000/' variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}


export default Hero;
