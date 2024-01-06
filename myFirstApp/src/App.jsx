
import React, { Component } from 'react';
import './App.css'
import First from './first'
class App extends Component {

  constructor() {
    super();
    this.state = {
      monster : [
        {

          name:'franklin',
          id: 'aasd1'
        },
        {
          name:'dorbeman',
          id:'aasd2'
        },
        {
          name:"pristiges",
          id:'assd3'
        }
        
      ]
    };
  }
  render(){
  return (
    <>
     <h1>Hello world</h1>
     {/* <First /> */}


     <h3>create app with vite </h3> 
     {
      this.state.monster.map(monster => <h1>{monster.name}  </h1>)
     }
    
    </>
  )
}
}

export default App
