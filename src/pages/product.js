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
      <h1 style = {{textAlign:'center',paddingTop:'3rem',color:'white'}}>{this.props.location.title}</h1>
      <div style={{justifyContent:'center',paddingTop:'2rem',height:'auto',paddingLeft:'2rem',display:'flex',color:'white'}}>
    
        <Column style = {{maxWidth:'32%',maxHeight:'100%', flexGrow:'4'}}paintings = {[<Painting src = {this.props.location.src} title = {this.props.location.title} description = {this.props.location.description}/>]}/>
        <div class = 'column' style = {{display:'flex',flexDirection:'column',textAlign:'center',alignItems:'center'}}>
          <h2>Specifications</h2>
          <p>{this.props.location.description}</p>
          
          <div style = {{display:'block',textAlign:'center',maxWidth:'50%',borderRadius:'25px',color:'white'}}>
            <div style = {{padding:'20px 20px 20px 20px'}}>
              
              <Button style = {{backgroundColor:'white', border:'none',color:'black'}}>Add to cart</Button>
            </div>
          </div>
        </div>

      </div>
      
      
       
        
      </>
    )
  }
}

export default Product;