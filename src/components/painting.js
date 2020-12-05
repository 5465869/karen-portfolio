import React from 'react';
import '../styles/gallery.css';
import { Link } from "react-router-dom";


class Painting extends React.Component {
  constructor(){
    super();
    this.state = {loaded: false};
  }

  render(){
    return (
      <div>
        {this.state.loaded ? null :
          <div
            class = 'card'
            style={{
              background: 'grey',
              height: '400px',
              width: '400px'
            }}
          />
        }
        <Link style={{ textDecoration: 'none', color:'black'}} to={{pathname:'/product', src : this.props.src, title:this.props.title,description:this.props.description}}>
          <div class="card" style = {this.props.style}>
            <img style={this.state.loaded ? {} : {display: 'none'}} src={this.props.src} onLoad={() => this.setState({loaded: true})}/>
            <div class="container">
              <h4><b>{this.props.title}</b></h4>
              <p>{this.props.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Painting;