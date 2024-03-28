import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../components/Header.css";
import { Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Cookies from "js-cookie";


//const Header = ({ cart }) => {

const Header = ({ cart }) => {
 

  const Logout = () => {
    Cookies.remove("EmailId")
    Cookies.remove("UserId")

  }



  return (
    <>
      <Container fluid className="fixed-top" style={{ backgroundColor: "rgb(66, 66, 126)" }}>
        <Row>
          <Col className="text-white my -1" style={{ marginLeft: "3%", marginBottom:"-4%", marginTop:"1.5%" }}><h5>Mobile Store Management System</h5></Col>
          <ListGroup horizontal className="my-3 justify-content-end">
          <ListGroupItem className="nav-link bg-transparent">
              <Link className="nav-link" to={"/finalCart"}>
                <span className="cart-num">{cart.length}</span>
                View Cart
              </Link>
            </ListGroupItem>
            <ListGroupItem className="nav-link bg-transparent">
              <Link className="nav-link" to={"/userorders"}>
                My orders
              </Link>
            </ListGroupItem>
            <ListGroupItem className=" nav-link bg-transparent">
              <Link onClick={Logout} className="nav-link" to={"/sign-in"}>
                <p>Logout</p>
              </Link>
            </ListGroupItem>
           </ListGroup>
        </Row>
      </Container >
    </>
  );
};

export default Header;
