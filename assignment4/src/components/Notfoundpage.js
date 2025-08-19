import React from 'react'
import {Col, Container, Row} from "react-bootstrap";

function NotFoundPage() {

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12}>
                    <h1>Page Not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFoundPage;