import React from 'react';
import Async from 'react-async';



// We'll request user data from this API

  
class Query extends React.Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    }
    componentDidMount() {
        this.fetchUsers();
      }
    render() {
        const { isLoading, users, error } = this.state;
        return (
          <React.Fragment>
            <h1>Random User</h1>
            {!isLoading ? (
              <h1>{users.rows[0].email}</h1>
            // If there is a delay in data, let's let the user know it's loading
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>
        );
      }
      fetchUsers(){
        // Where we're fetching data from
        fetch('https://frozen-lowlands-07363.herokuapp.com/db', {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    .then(data => {this.setState({users : data, isLoading : false});})

    .catch(err => {
        console.log("fetch error" + err);
    });
    }
}

export default Query;
