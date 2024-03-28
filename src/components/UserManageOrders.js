import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
 
const UserManageOrders = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
        fetchServices();
     }, []);

        const fetchServices = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:5277/api/Post/Order/Get/api/Get/Order');
            setDetails(response.data);
            console.log(response.data);
            setLoading(false);
        };


 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    return (
        <>
        <div><Navbar/>

       <h4 style={{textAlign:"center" , color:"rgb(66, 66, 126)"}}>My Orders</h4>
        <table style={{width:"80%",marginLeft:"7%"}} class="table">
            <thead>
                <tr>
                    <th scope='col'>Order Id</th>
                    <th scope='col'>Mobile Name</th>
                    <th scope='col'>Mobile Model</th>
                    <th scope='col'>Mobile Price</th>
                    <th scope='col'>Ordered date</th>
                    <th scope='col'>Order Status</th>

                    
                    
                </tr>
            </thead>
            <tbody>
                {details.filter((item)=>item.users.emailId==Cookies.get("EmailId")).map(e => (
                    <tr key={e.orderId}>
                        <td>{e.orderId}</td>
                        <td>{e.mobile.mobileName}</td>
                        <td>{e.mobile.mobileModel}</td>
                        <td>{e.mobile.mobilePrice}</td>
                        <td>{e.orderDate}</td>
                        <td>{e.orderStatus}</td>

                        
                       
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <Link to="/Home">
                 <Button
                 style={{marginLeft:"85%"}}
                className="btn-btn secondary"
                variant="secondary">
                Back to HomePage
              </Button>
              </Link>
        </>
    );
};
 
export default UserManageOrders;