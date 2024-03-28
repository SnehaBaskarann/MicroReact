import React from 'react'
import Mobile from './components/images/mob.jpg';
import Homenavbar from './Homenavbar';



function HomePage() {
  return (
    <div><Homenavbar/>
    <div class='dashboard' >
    <img src={Mobile} alt='mobile' className='img' ></img>
    </div>
    </div>
 
    
  )
}

export default HomePage;




