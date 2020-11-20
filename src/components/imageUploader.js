import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('https://frozen-lowlands-07363.herokuapp.com/upload', {
        method: 'POST',
        body: data,
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="photo" accept="image/*" type="file" />
  
          <label htmlFor="email">Enter painting size</label>
          <input id="size" name="size" type="text" />
  
          <label htmlFor="birthdate">Enter image title</label>
          <input id="title" name="title" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

export default ReactUploadImage