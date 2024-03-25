import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie';


function Login() {
    const initialValues = { emailId: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const lsmsg =useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        try {
            const response = await axios.post("http://localhost:5277/api/User/api/Signin", formValues);
            console.log('Login successful:', response.data);
            window.alert('Login successful');
            // Redirect or any other action upon successful login
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!values.emailId) {
            errors.emailId = "Email is required!";
        } else if (!regex.test(values.emailId)) {
            errors.emailId = "This is not a valid email format!"
        }else if(values.emailId==='admin123@admin.com'&& values.password==='admin123'){
            navigate("/Dashboard")
        } else{
            Cookies.set("EmailId",formValues.emailId,{expires:7})
            lsmsg.current.style.display="block"
            setTimeout(()=>{
                
                navigate("/Home")
            },1000)
           

          }
    

        if (!values.password) {
            errors.password = "Password is required!";
        }
        if(Object.keys(formErrors).length === 0 && isSubmit){
            navigate("/Home")
        }

        return errors;
    }

    return (
        <>
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='lbl'><PersonAddAltOutlinedIcon fontSize="large" id="icon" style={{ color: "rgb(66, 66, 126)" }} />Login</h3>
                        <div><TextField id="outlined-basic" label="EmailId" type="text" required variant="outlined" name='emailId' value={formValues.emailId} onChange={handleChange} /></div><br></br>
                        <div><TextField id="outlined-basic" label="Password" type="password" required variant="outlined" name='password' value={formValues.password} onChange={handleChange} /></div><br></br>
                        <div className="d-grid">
                            <Button type="submit" variant="contained" style={{ backgroundColor: "rgb(66, 66, 126)" }}>Login</Button>
                        </div>
                        <p className="forgot-password text-right">
                            Not registered yet? <a href="/sign-up">Sign Up</a>
                        </p>
                    </form>
                    <p id="lsmsg" ref={lsmsg}>Login Successful!</p>
                </div>
            </div>
        </>
    )
}

export default Login;


