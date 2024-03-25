import React from 'react'
import cart from './components/images/cart.jpg'
import Navbar from './components/Navbar';




function HomePage() {
  return (
    <div><Navbar/>
    <div class='dashboard' >
    <img src={cart} className='Home'></img>
    
    </div>
    </div>
 
    
  )
}

export default HomePage;