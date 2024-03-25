import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../components/Header.css";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const Header = ({cart}) => {
  return (
    <>
      <Container fluid className="fixed-top" style={{backgroundColor:"rgb(66, 66, 126)"}}>
        <Row>
          <Col className="text-white my-4"><h5 >Mobile Store Management System</h5></Col>
          <Col></Col>
          <Col>
            <ListGroup horizontal className="my-3 justify-content-end">
              <ListGroupItem className=" nav-link bg-transparent">
                <Link className="nav-link" to={"/Home"}>
                  Home
                </Link>
              </ListGroupItem>
              <ListGroupItem className="nav-link bg-transparent">
                <Link className="nav-link" to={"/Cart"}>
                <span className="cart-num">{cart.length}</span> 
                  View Cart
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
