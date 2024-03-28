import Cookies from 'js-cookie';
import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {

const RemoveCookie=()=>{
  Cookies.remove("EmailId")
  Cookies.remove("UserId")
  

}

    return (
  
      
          <nav id="nav1" className="navbar navbar-expand-lg navbar-light fixed-top customnavbar">
            <div className="container">
              <h2 className="navbar-brand" style={{ color: "White" , marginTop:"-6.5%" , marginRight:"30%" }}>Mobile Store Management System</h2>

              </div >
              {/* <Link style={{color:"White",marginRight:"1%", textDecoration:"none", fontSize:"20px"}} to={"/sign-up"}>Sign Up</Link> */}
              {/* <Link style={{color:"White",marginRight:"1%", textDecoration:"none", fontSize:"20px"}} to={"/sign-in"}>Sign In</Link> */}
              

        </nav>
    )}

    export default Navbar;