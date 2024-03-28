import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from './Loader';
 
function FinalCart() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const removeCart = (mid) => {
        // setCart(cart.filter((c) => c.id !== product.id));
        const mobileid=mid;
        const result={
          "cartId": 0,
          "mobileId": mobileid,
          "userId": Cookies.get("UserId")
        }
        axios.post(`http://localhost:5277/api/Cart/Delete`, result).then((response)=>{
            window.location.reload();  
          console.log(response);
        }).catch((err)=>{
          console.log(err);
        
        })
       

       

      };
    const Order=(mid)=>{
        const myDate = new Date(); // Your existing Date object
const formattedDate = myDate.toDateString();

        const mobileid=mid;
        const result={
            "orderId": 0,
            "orderDate": formattedDate,
            "orderStatus": "Pending",
            "userId": Cookies.get("UserId"),
            "mobileId": mobileid
          
          
          
        }
        axios.post('http://localhost:5277/api/Post/Order/Create', result).then((response)=>{
          console.log(response)
        }).catch((err)=>{
          console.log(err);
        })

        navigate("/payment")
        removeCart(mobileid)
      
    }
    useEffect(() => {
        fetch('http://localhost:5277/viewbyuserid/'+Cookies.get("UserId"))
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);
 
    return (
        <div>
            {data ? data.map(item => (
                <>
                <div><Navbar/></div>
                <div key={item.cartId} style={{ marginTop: '5%', marginLeft: '5%' }}>
                    <Card style={{ width: '20rem', height: '13rem' }}>
                        <Card.Body>
                            {/* <Card.Img>{item.mobile.uniqueFilename}</Card.Img> */}
                            {/* <Card.Img className="card-img"  src={product.imageUrl}/> */}
                            {/* <Card.Title>{item.mobile.imageUrl}</Card.Title> */}
                            
                            <Card.Text>
                                <h5>{item.mobile.mobileName} </h5>  <p>{item.mobile.mobileModel}</p>
                                <p>{item.mobile.mobilePrice}</p>
                                {/* Some quick example text to build on the card title and make up the
                                bulk of the card's content. */}
                            </Card.Text>
                            
                           
                        </Card.Body>
                        <Button style={{width:"100px",marginLeft:"12%",marginTop:"3%"}} onClick={()=>{Order(item.mobile.mobileId)}} variant="warning">Buy Now</Button><br></br>
                        <Button style={{marginLeft:"60%",marginTop:"-20%",marginRight:"6%",marginBottom:"78%"}} onClick={()=>{removeCart(item.mobile.mobileId)}} variant="danger">Remove</Button> 
                
                    </Card>
                    
                </div><br></br>
               
               
                </>
            )) : <Loader/>}
             <div>
                 <Link to="/Home">
                 <Button
                 style={{marginLeft:"85%"}}
                className="btn-btn secondary"
                variant="secondary">
                Back to HomePage
              </Button>
              </Link>
                 </div>
           
        </div>
        
    )
}
 
export default FinalCart;






// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

// function FinalCart() {
//     const [value, setValue] = useState([]);

//     useEffect(() => {
//        const response= axios.get('http://localhost:5277/api/Cart/GetAllCart');
//        setValue(response.data);
//        console.log(response.data);
            
//     }, []);

//     return (
//         <div>
//             {value.map(()=>{

//             })}
//         </div>
//     );
// }

// export default FinalCart;
