import React from 'react'
import {Card, Col, Container, Row} from "react-bootstrap";
import logo from '../logo.svg'

function Userinfo() {

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12}>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={logo}/>
                        <Card.Body>
                            <Card.Title>Abhishek Vichhi</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
                            <Card.Text>
                                Working and learing new things as a developer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Userinfo;