// import React, { useEffect, useRef } from 'react'
// import axios from 'axios'
// import { useState } from 'react';
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField';
// import {useNavigate} from 'react-router-dom'
// import Cookies from 'js-cookie';
// import { PersonAddAltRounded } from '@mui/icons-material';


// function Login() {
//     const initialValues = { emailId: "", password: "" };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const navigate = useNavigate();
//     const lsmsg =useRef();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     }

//     useEffect(() => {
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//         try {
//             const response = await axios.post("http://localhost:5277/api/User/Signin/api/Signin", formValues);
//             console.log('Login successful:', response.data);
//             window.alert('Login successful');
//             // Redirect or any other action upon successful login
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }

//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!values.emailId) {
//             errors.emailId = "Email is required !";
//         } else if (!regex.test(values.emailId)) {
//             errors.emailId = "This is not a valid email format!"
//         }else if(values.emailId==='admin123@admin.com'&& values.password==='admin123'){
//             navigate("/Dashboard")
//         } else{
//             Cookies.set("EmailId",formValues.emailId,{expires:7})
//             lsmsg.current.style.display="block"
//             setTimeout(()=>{
                
//         navigate("/Home")
//             },1000)
           

//           }
    

//         if (!values.password) {
//             errors.password = "Password is required!";
//         }
//         if(Object.keys(formErrors).length === 0 && isSubmit){
//             navigate("/Home")
//         }

//         return errors;
//     }

//     return (
//         <>
//             <div className='auth-wrapper'>
//                 <div className='auth-inner'>
//                     <form onSubmit={handleSubmit}>
//                         <h3 className='lbl'><PersonAddAltRounded fontSize="large" id="icon" style={{ color: "rgb(66, 66, 126)" }}/> Login</h3>
//                         <div><TextField id="outlined-basic" label="EmailId" type="text" required variant="outlined" name='emailId' value={formValues.emailId} onChange={handleChange} /></div><br></br>
//                         <div><TextField id="outlined-basic" label="Password" type="password" required variant="outlined" name='password' value={formValues.password} onChange={handleChange} /></div><br></br>
//                         <div className="d-grid">
//                             <Button type="submit" variant="contained" style={{ backgroundColor: "rgb(66, 66, 126)" }}>Login</Button>
//                         </div>
//                         <p className="forgot-password text-right">
//                             Not registered yet? <a href="/sign-up">Sign Up</a>
//                         </p>
//                     </form>
//                     <p id="lsmsg" ref={lsmsg}>Login Successful!</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login;

























import React, { Component } from 'react'
import { useState, useRef } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { PersonAddAltRounded } from '@mui/icons-material';
import Cookies from 'js-cookie';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
 
const Login = () => {
 
 
  const navigate = useNavigate();
  const [emailId, setEmail] = useState();
  const [Password, setPassword] = useState();
//   const msgref = useRef();
//   const errmsg = useRef();
//   const errmsg2 = useRef();
//   const length=useRef();
  const [txtclr,setTextclr]=useState()
  const[focuspsd,setFocuspsd]=useState()

 
  const handleSignupForm = async event => {
    event.preventDefault();
    console.log(Password.length)
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    let param = {
      emailId: emailId,
      password: Password
 
    }
 
    if(emailId==="admin123@admin.com" && Password==="admin123"){
        navigate("/Dashboard")
    }else{
        let URL = "http://localhost:5277/api/User/Signin/api/Signin";
    await axios.post(URL, param, {
      headers: headers
    }).then((response) => {
      if (response.data == null || response.data == undefined) {
        console.log("success");
      } else {
        console.log(response.data);
        // JSON.parse(response); // should fail
        // JSON.parse(response["data"]); // should work
        var result = JSON.parse(response.data)
        console.log(result.emailstatus) // or if you prefer this notation
        if (result.emailstatus == true && result.passwordstatus == true) {
          Cookies.set('EmailId', emailId, { expires: 7 });
         
 
        //   console.log(msgref.current.innerText);
          //msgref.current.style.visibility = "visible";
        //   msgref.current.style.display="block";
        alert("Login Successful")
          setTimeout(() => {
            // msgref.current.style.display="block";
            // Cookies.set('Signin', true);
            navigate('/Home')
          }, 500);
          setFocuspsd("")
 
        }
        else if (result.emailstatus == false && result.passwordstatus == false) {
        //   errmsg.current.style.display="block";
        alert("Login Failed")
          setTimeout(() => {
            // errmsg.current.style.display="none";
          }, 1000);
         
        }
 
        else if (result.emailstatus == true && result.passwordstatus == false) {
        //   errmsg2.current.style.display="block";
        alert("Incorrect Password")
          setTimeout(() => {
            // errmsg2.current.style.display="none";
          }, 1000);
          setTextclr("error")
          setFocuspsd("true")
        }
        
         
   
      };
 
    });
 
 
}
    }
    
 
 
 
  return (
<>


 <div className='auth-wrapper '>   
 <div className='auth-inner'>
 
 
 <form onSubmit={handleSignupForm}>
   <h3 data-testid="MyHeading"> <PersonAddAltRounded fontSize='large' id="icon" style={{ color: "rgb(66, 66, 126)"}}/> Login</h3>
   <div> <TextField type="email" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required />  </div>
<br></br>
   {/* <div className="mb-3">
     <label>Email address</label>
     <input
       type="email"
       className="form-control"
       placeholder="Enter email"
       required
       onChange={(e) => setEmail(e.target.value)}
     />
   </div> */}
   <div> <TextField type="password" id="outlined-basic" color={txtclr} focused={focuspsd} label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} required />  </div>
<br></br>
   {/* <div className="mb-3">
     <label>Password</label>
     <input
       type="password"
       className="form-control"
       placeholder="Enter password"
       required="Please enter "
       onChange={(e) => setPassword(e.target.value)}
     />
     
   </div> */}
 
   <div className="d-grid">
   <Button type='submit' variant='contained' style={{backgroundColor:"rgb(66, 66, 126)"}}>Sign In</Button>
     {/* <button type="submit" className="btn btn-primary">
       Submit
     </button> */}
   </div>
   <p className="forgot-password text-right">
      Not registered yet?<a href="/sign-up">Sign Up</a>
   </p>
 
   
   <div id="lscsmsg" class="alert alert-success msg" role="alert">
     Login Successful!
   </div>
 
 
   <div class="alert alert-danger msg"  role="alert">
     Invalid email!
   </div>
 
   <div class="alert alert-danger msg"  role="alert">
     Incorrect Password!
   </div>
 </form>
 
 </div></div></>
  )
}
 
 
export default Login;