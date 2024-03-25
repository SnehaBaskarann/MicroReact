import React, { useEffect, useState } from 'react';
import './Viewcart.css';
import { Card, Container,Button } from 'react-bootstrap';
import { useContext } from 'react';
import { cartContext } from '../App';
import {Link} from 'react-router-dom'
import Navbar from './Navbar';





 const Viewcart = () => {
  const {cart,setCart}=useContext(cartContext);
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0));

  },[cart]);
  const removeCart=(productId)=>{
    setCart(cart.filter((c)=>c.id!==productId));
  };
  
  return (
    <>
    <div><Navbar/>
      <h3 className='mt-2' style={{textAlign:"center"}}>Cart Products</h3>
    <Container className='cart-container mt-4'>
    {cart.map((product)=>(
      
      <Card style={{ width: '18rem'}} key={product.id}>
      <Card.Img className='card-img' variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text id='cart'>
          Cart Summary <br></br>

          Cart Total(1) &nbsp;   
          {product.price}
        </Card.Text>
        
          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={()=>removeCart(product.id)}
          >
            Remove Cart
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/payment" style={{textDecoration:'none'}}>
          <Button
            className="btn btn-warning"
            variant="primary">
           Buy Now
          </Button>
          </Link>
       

        
      </Card.Body>
    </Card>
    
    ))
      
    }

    </Container>
    
    
    <h3 style={{textAlign:"center"}}>Total Amount :₹{total} </h3>
  </div>
    </>
  )
};

export default Viewcart;
