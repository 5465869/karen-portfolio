import React from 'react';
import Painting from '../components/painting';
import '../styles/gallery.css';
import Column from '../components/column';
import Button from 'react-bootstrap/Button'
class Product extends React.PureComponent {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <>
      <h1 style = {{textAlign:'center',paddingTop:'3rem'}}>{this.props.location.title}</h1>
      <div style={{justifyContent:'center',paddingTop:'2rem',height:'auto',paddingLeft:'2rem',display:'flex'}}>
    
        <Column style = {{maxWidth:'32%',maxHeight:'100%', flexGrow:'4'}}paintings = {[<Painting src = {this.props.location.src} title = {this.props.location.title} description = {this.props.location.description}/>]}/>
        <div class = 'column' style = {{display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center'}}>
          <h2>Specifications</h2>
          <p>The most beautiful painting you've ever seen!</p>
          <p>5x7 oil on canvas</p>
          <div style = {{display:'block',textAlign:'center',maxWidth:'50%',borderRadius:'25px'}}>
            <div style = {{padding:'20px 20px 20px 20px'}}>
              <h4>$400</h4>
              <Button style = {{backgroundColor:'black', border:'none'}}>Add to cart</Button>
            </div>
          </div>
        </div>

      </div>
      
      
       
        
      </>
    )
  }
}

export default Product;