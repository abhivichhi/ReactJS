import React from 'react'
import {Col, Row} from "react-bootstrap";
import ShoppingCart from "./ShoppingCart";

function Home() {

    return (
        <container-fluid className="mt-5">
            <Row>
                <Col xs={12}>
                    <div className="min-h-screen">
                        <main className="mx-auto p-4">
                            <ShoppingCart />
                        </main>
                    </div>
                </Col>
            </Row>
        </container-fluid>
    )
}
export default Home;