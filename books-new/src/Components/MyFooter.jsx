import React from "react";
import {Navbar, Container, Nav, NavbarBrand, NavLinkr} from "react-bootstrap";
import App from "../App";
const CustomFooter = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container fluid={props.isFluid}>
                <Navbar.Brand href ="#home">Ti piace?</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id = "responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Broswer</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CustomFooter