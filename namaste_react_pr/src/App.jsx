import React from 'react'

import './App.css'
import Header from './components/Header'
import Body from './components/Body'


/* 
  - header
    -logo 
    -Nav Items
  -body
    -Search
    -RestaurantContainer
    -RestarantCard
  -Footer
    -copyrihgts
    -links
    -address 
    -contact
*/

function App() {
  return (
    <>
    <div className="container">

    <Header />
    <Body />
    


    </div>
    
    </>
  )
}

export default App
