import React from 'react'
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function Homenavbar() {
  return (
    <nav id="nav1" className="navbar navbar-expand-lg navbar-light fixed-top customnavbar">
    <div className="container">
      <h3 className="navbar-brand" style={{ color: "White" , marginTop:"-6.5%" , marginRight:"30%" }}>Mobile Store Management System</h3>

      </div >
      <Link style={{color:"White",marginRight:"1%", textDecoration:"none"}} to={"/sign-up"}>
        <AppRegistrationIcon fontSize='large'/>Sign Up</Link>
      <Link style={{color:"White",marginRight:"1%", textDecoration:"none"}} to={"/sign-in"}>
        <LoginIcon fontSize='large'/>Sign In</Link>
      <div>
            </div>
      

</nav>
  )
}

export default Homenavbar;