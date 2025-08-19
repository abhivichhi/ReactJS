import React from 'react'
import {Container, Row, Col, NavLink, Navbar, Nav} from "react-bootstrap";
import logo from '../logo.svg'

function NavBar() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar bg="dark" data-bs-theme="dark" expand="sm">
                        <Container fluid>
                            <Navbar.Brand>
                                <NavLink href="/">
                                    <img src={logo} height='100' width='100' alt="Home"/>
                                </NavLink>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavLink href="/">Home</NavLink>
                                    <NavLink href="/about">About</NavLink>
                                    <NavLink href="/userinfo">User Info Page</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default NavBar;