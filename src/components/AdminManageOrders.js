import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
 
const AdminManageOrders = () => {
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


        const handleShipped = async (Id) => {
            try {
                debugger
                await axios.post('http://localhost:5277/api/Post/Order/Put', { id:Id,Status: "Shipped"});
                fetchServices();
            } catch (error) {
                // console.error(error);
            }
        };
       
        const handleDelivered = async (Id) => {
            try {
                await axios.post('http://localhost:5277/api/Post/Order/Put', { id:Id,Status: "Delivered" });
                fetchServices();
            } catch (error) {
                console.error(error);
            }
        };
 
        



 
       

 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    return (
        <>
        <div><Navbar/>

       <p style={{textAlign:"center",color:"rgb(66, 66, 126)", fontSize:"20px",fontWeight:"bold"}}>Order Details</p>
        <table style={{width:"80%",marginLeft:"10%"}} class="table">
            <thead>
                <tr>
                    <th scope='col'> Order Id</th>
                    <th scope='col'> User Name</th>
                    <th scope='col'> Mobile Name</th>
                    <th scope='col'> Mobile Model</th>
                    <th scope='col'> Mobile Price</th>
                    <th scope='col'> Order date</th>
                    <th scope='col'> Order Status</th>
                    <th scope='col'> Actions</th>
                    {/* <th scope='col'>Actions</th> */}
                    
                    
                </tr>
            </thead>
            <tbody>
                {details.map(e => (
                    <tr key={e.orderId}>
                        <td>{e.orderId}</td>
                        <td>{e.users.firstName}{e.users.lastName}</td>
                        <td>{e.mobile.mobileName}</td>
                        <td>{e.mobile.mobileModel}</td>
                        <td>{e.mobile.mobilePrice}</td>
                        <td>{e.orderDate}</td>
                        <td>{e.orderStatus}</td>
                        <td><button type="button" onClick={()=>handleShipped(e.orderId)} class="btn btn-info" style={{backgroundColor:"InfoBackground"}}>Shipped</button></td>
        
                       <td> <button type="button" onClick={()=>handleDelivered(e.orderId)} class="btn btn-info" style={{backgroundColor:"InfoBackground"}}>Delivered</button></td>
                        
                       
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <div>
        <Link to="/Dashboard" style={{marginLeft:"80%" , textDecoration:"none"}}>Back to Dashboard</Link>
    </div>
        </>
    );
};
 
export default AdminManageOrders;