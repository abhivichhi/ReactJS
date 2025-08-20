import React from 'react'
import {Container, Row, Col, NavLink, Navbar} from "react-bootstrap";
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
                            <h1 className="text-2xl font-bold text-white"> Online Shoe Store</h1>
                            <Navbar>
                            </Navbar>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default NavBar;