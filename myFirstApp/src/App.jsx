
import React, { Component } from 'react';
import './App.css'
class App extends Component {

  constructor() {
    super();
    this.state = {
      monster : []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monster : users}));
  }
  render(){
  return (
    <>
     <h1>Hello world</h1>
 


     <h3>create app with vite </h3> 
     {
      this.state.monster.map(monster => <h1>{monster.name}  </h1>)
     }
    
    </>
  )
}
}

export default App
