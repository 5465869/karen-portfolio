import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import React from 'react'
import { Link } from "react-router-dom";

class ImageViewer extends React.Component {
    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this);
       
    }
    handleClose(){
        this.props.onClose();
    }
   
    render(){
        return <Lightbox onClose = {this.handleClose} image= {this.props.src} title={this.props.title}/>;
    }
}


export default ImageViewer;