import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
 
const CustomerDetails = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:5277/api/User/Get');
            setDetails(response.data);
            console.log(response.data);
            setLoading(false);
        };
 
        fetchServices();
    }, []);
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    return (
        <>
        <div><Navbar/>

       <h4 style={{textAlign:"center" , color:"rgb(66, 66, 126)"}}>Customer Details</h4>
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>User Id</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Email Id</th>
                    <th scope='col'>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {details.map(e => (
                    <tr key={e.userId}>
                        <td>{e.userId}</td>
                        <td>{e.firstName}</td>
                        <td>{e.lastName}</td>
                        <td>{e.emailId}</td>
                        <td>{e.phoneNumber}</td>
                       
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <Link to="/Dashboard" style={{marginLeft:"90%", textDecoration:"none"}}>Back to Dashboard</Link>

        </>
    );
};
 
export default CustomerDetails;