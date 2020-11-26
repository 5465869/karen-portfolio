import React from 'react';
import Painting from '../components/painting';
import '../styles/gallery.css';
import Column from '../components/column';
class Product extends React.PureComponent {
    constructor(props){
        super(props);
        console.log(this.props.location.src);
    }
  render() {
    return (
      <>
      <div style={{justifyContent:'left',paddingLeft:'5rem',paddingTop:'5rem'}}class="row">
        <Column paintings = {[<Painting src = {this.props.location.src} title = {this.props.location.title} description = {this.props.location.description}/>]}/>
        <h1>{this.props.location.description}</h1>
        <div style = {{backgroundColor:'grey'}}>
            <p>$175</p>
            <button>Add to Cart</button>
        </div>
      </div>
       
        
      </>
    )
  }
}

export default Product;