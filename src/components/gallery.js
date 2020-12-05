import React from 'react';

import Painting from './painting';
import Column from './column'

import '../styles/gallery.css';

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {images:[]};
        this.makeColumns = this.makeColumns.bind(this);
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://frozen-lowlands-07363.herokuapp.com/images')
            .then(response => response.json())
            .then(data => this.setState({ images: data.results }));
        
    }
    makeColumns(){
        let column1;
        let column2;
        let column3;
        
        let paintings = this.state.images.map(image => 
            {
                return <Painting title = {image.image_title} description = {image.image_size} src = {image.image_path}/>
            })
        column1 = <Column paintings = {paintings.slice(0,Math.floor(paintings.length/3))}/>
        column2 = <Column paintings = {paintings.slice(Math.floor(paintings.length/3),Math.floor(paintings.length/3) + Math.floor(paintings.length/3))}/>
        column3 = <Column paintings = {paintings.slice(Math.floor(paintings.length/3) + Math.floor(paintings.length/3),paintings.length)}/>
        console.log(column1);
      
        let columns = [column1,column2,column3]
        return columns;
        
    }

    render(){

    
    return(
        <>
        
    <h1 style = {{color:"white",textAlign:'center',marginTop:'10px',fontSize:'100px'}}>Gallery</h1>
    <div class="row">
        
        {this.makeColumns()[0]}
        {this.makeColumns()[1]}
        {this.makeColumns()[2]}

    </div>
 
    </>
    );
    }
}


export default Gallery;
