import React, { useState } from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
 
 
 
const initialValues = {
  
  mobileName: "",
  mobileModel: "",
  mobilePrice: "",
  mobileImage: null,
  stockId:""
};
 
function Uploadform() {
  const [values, setValues] = useState(initialValues);
//   const Usenavigate = useNavigate();
 
 
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleImageChange = (e) => {
    setValues({
      ...values,
      mobileImage: e.target.files[0],
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
 
    try {
      console.log(formData)
      const response = await axios.post(
        "http://localhost:5277/api/Mobile/CreateUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Posted successfully");
      console.log("Posted successfully:", response.data);
    //   Usenavigate('/postaccessory')
    } catch (error) {
      console.error("Post failure:", error);
    }
  };
 
  return (
   <div><Navbar/>
    <Container>
      <Card>
        <CardBody style={{backgroundColor:"#d9dcd6"}}>
          <Form onSubmit={handleSubmit}>
            <h3 style={{textAlign:"center"}}> Adding Mobiles</h3>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Name</Form.Label>
              <Form.Control
                type="text"
                name="mobileName"
                placeholder="Enter the Mobile Brand"
                value={values.mobileName}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>Mobile Model</Form.Label>
              <Form.Control
                type="text"
                name="mobileModel"
                placeholder="Enter the Mobile Model"
                value={values.mobileModel}
                onChange={handleInput}
              />
            </Form.Group>
 
            <Form.Group className="mb-3">
              <Form.Label>Mobile Price</Form.Label>
              <Form.Control
                type="text"
                name="mobilePrice"
                placeholder="Enter the Mobile Price"
                value={values.mobilePrice}
                onChange={handleInput}
              />
            </Form.Group> 

            <Form.Group className="mb-3">
              <Form.Label>Stock Id</Form.Label>
              <Form.Control
                type="int"
                name="stockId"
                placeholder="Enter the Stock Id"
                value={values.stockId}
                onChange={handleInput}
              />
            </Form.Group>
 
 
            <Form.Group className="mb-3">
              <Form.Label>Mobile Image</Form.Label>
              <Form.Control
                type="file"
                name="mobileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>


 
            <Button type="submit">Submit</Button>
            &nbsp;
            <Link to="/Dashboard" style={{marginLeft:"65%" , textDecoration:"none"}}>Back to Dashboard</Link>
          </Form>
        </CardBody>
      </Card>
    </Container>
    </div> 
  );
}
 
export default Uploadform;