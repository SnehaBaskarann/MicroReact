import React, { useState } from "react";
import "./Product.css";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { cartContext } from "../App";
import Header from "./Header";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  // const name =
  //   product.title.length > 21
  //     ? product.title.substring(0, 20) + ".."
  //     : product.title;
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

// const Cart=async(event)=>{
//   var Email=Cookies.get("EmailId")
// const[userId,setUserId]=useState();

// useEffect(() => {
//   axios.post('http://localhost:5277/api/User/FindEmail/api/FindEmail',{
//     emailId:Email,
//   })
//   .then(res=>{
//     setUserId(res.data.userId);
//     console.log(res.data);
//     Cookies.set( "UserId", res.data.userId)
 
 
// })
// .catch((err)=>{console.error(`Error! ${err}`)});
// }, [])
 
// const removeCart= (id)=>{
//   console.log(id);
// }

// const addCart = async (id) => {
  
//   event.preventDefault();
//   const headers = {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }

//   let param = {   
//      mobileId:id,
//       cartId:0,
//       userId:userId
//   }

//   let URL = "http://localhost:5277/api/Cart/Create";
//     await axios.post(URL, param, {
//       headers: headers
//     }).then((response) => {
     
//   const addcart=(id)=>{
//     console.log(id);
//   }
// });

return (
  <>
 <Header cart={cart}/>
  <Card style={{ width: "18rem" }} className="mt-4">
    <Card.Img className="card-img"  src={product.imageUrl}/>
    <Card.Body>
      {/* <Card.Title>{name}</Card.Title> */}
      <Card.Text>
      <b>Brand :</b> {product.name}
        </Card.Text>
      <Card.Text>
       <b>Model :</b> {product.model}
      </Card.Text>
      <Card.Text>
      <b>Amount :</b> {product.price}
      </Card.Text>
      <Card.Text>
      <h6 style={{color:"green"}}>In Stock</h6>
      </Card.Text>

      {cart.includes(product) ? (
        <Button
          className="btn btn-danger"
          variant="primary"
          onClick={()=>removeCart(product.mobileId)}
        >
          Remove Cart
        </Button>
      ) : (
        <Button
          className="btn btn-primary"
          variant="primary"
          onClick={addCart}
        >
          Add to Cart
        </Button>
      )}
    </Card.Body>
  </Card>
  </>
)

}




  
