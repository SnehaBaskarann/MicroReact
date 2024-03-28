import React, { useState} from "react";
import { Button, Card, CardBody, Container, Form } from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';





const initialValues = {
  mobileId:"",
  mobileName: "",
  mobileModel: "",
  mobilePrice: "",
  mobileImage:null,
  stockId:"" // Assuming the default stockId is 1
};

function UploadformUpdate() {
  const [values, setValues] = useState(initialValues);

 

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
      if (key !== "mobileId") {
        formData.append(key, value);
      }
    });
      
    

    try {
        debugger
        console.log(values.mobileId);
      const response = await axios.put(
        "http://localhost:5277/api/Mobile/UpdateMobile/"+values.mobileId, // Assuming the endpoint for update
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.alert("Updated successfully");
      console.log("Updated successfully:", response.data);
    } catch (error) {
      console.error("Update failure:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Card>
          <CardBody style={{ backgroundColor: "#d9dcd6" }}>
            <Form onSubmit={handleSubmit}>
              <h3 style={{ textAlign: "center" }}>Updating Mobile</h3>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Id</Form.Label>
                <Form.Control
                  type="int"
                  name="mobileId"
                  placeholder="Enter the Mobile Id"
                  value={values.mobileId}
                  onChange={handleInput}
                />
              </Form.Group>
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

              <Button type="submit">Update</Button>
            <Link to="/Dashboard" style={{marginLeft:"65%" , textDecoration:"none"}}>Back to Dashboard</Link>

            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>

  );
}

export default UploadformUpdate;
