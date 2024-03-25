import React, { useEffect } from 'react'
import axios from 'axios'
import { useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
//import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

 
 
 

function Register(){

    const initalvalues = { firstName: "", lastName: "", emailId: "", password: "",phoneNumber:"" };
    const [formValues, setformValues] = useState(initalvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value })
    }
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])
 
    const handleSubmit =async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try {
 
            const response = await axios.post("http://localhost:5277/api/User", formValues);
   
            console.log('Registeration successfull:', response.data);
   
            window.alert('Registeration successfull');
   
           navigate('/sign-in');
   
        }
   
        catch (error) {
   
            console.error('Error:', error);
   
        }
       
    }
 
    const validate = (values) => {
        //console.log("Inside Validation");
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
        if (!values.firstName) {
            errors.firstName = "Firstname is required!";
        }
        if (!values.lastName) {
            errors.lastName = "Lastname is required!";
        }

        if (!values.emailId) {
            errors.emailId = "Email is required!";
        } else if (!regex.test(values.emailId)) {
            errors.emailId = "This is not a valid email format!"
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 charcters"
        } else if (values.password.length >=14) {
            errors.password = "Password must not exceed more than 14 characters"
        }
        if (!values.phoneNumber) {
            errors.phoneNumber= "Phonenumber is required!";
        }
       
        if (Object.keys(formErrors).length === 0 && isSubmit){
            navigate('/sign-in')
        }
        return errors;
    }
 
 
  return (
    <>
     <div className='auth-wrapper'>   
     <div className='auth-inner'> 
     <form onSubmit={handleSubmit}>
 
     <h3 className='lbl'><PersonAddAltRoundedIcon fontSize="large" id="icon" style={{color:"rgb(66, 66, 126)"}}/>Sign Up</h3>
        <div><TextField id="outlined-basic"  label="FirstName" type="text" variant="outlined" name='firstName' value={formValues.firstName}  onChange={handleChange}/></div><p style={{color:"red"}}>{formErrors.firstName}</p><br></br>
         <div><TextField id="outlined-basic"  label="LastName" type="text" variant="outlined" name='lastName' value={formValues.lastName} onChange={handleChange}/></div><p style={{color:"red"}}>{formErrors.lastName}</p><br></br>
  
         <div><TextField id="outlined-basic"  label="EmailId" type="text" variant="outlined"  name='emailId' value={formValues.emailId} onChange={handleChange}/></div><p style={{color:"red"}}>{formErrors.emailId}</p><br></br>
         <div><TextField id="outlined-basic"  label="Password" type="text" variant="outlined" name='password' value={formValues.password} onChange={handleChange}/></div><p style={{color:"red"}}>{formErrors.password}</p><br></br>
         <div><TextField id="outlined-basic"  label="Phonenumber" type="int" variant="outlined"name='phoneNumber' value={formValues.phoneNumber} onChange={handleChange}/><p style={{color:"red"}}>{formErrors.phoneNumber}</p></div><br></br>

          {/* <p ref={lenref} className="Password">*Password length should be above 8 character</p>
          <p ref={maxlen} className="Password">*Password Should not exceeds 14 characters</p> */}

        
         <div className="d-grid">
         <Button type="submit" variant="contained" style={{backgroundColor:"rgb(66, 66, 126)"}}>Sign Up</Button></div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        {/* <div class="alert alert-success msg" ref={msgref} role="alert">
          Registeration Successful!
        </div>

        <div class="alert alert-danger msg" ref={nullref} role="alert">
         This Email Id is already exists !
        </div> */}


      </form>
      </div>
      </div>
         </>
  )
}
 
export default Register;




