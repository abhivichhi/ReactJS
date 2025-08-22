import React, {useEffect, useState} from 'react';
import Apicalls from "./Apicalls";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const CreateEditUser = () => {
    const [user, setUser] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('userid') !== null){
            getUserbyID(localStorage.getItem('userid'))
        }
    }, []);

    const getUserbyID = async (userid) => {
        const response = await Apicalls.getUserById(userid);
        setUser(response.data);
        setEditing(true);
        setCurrentUserId(userid);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser(e);
        if (editing) {
            const response = await Apicalls.updateUser(currentUserId, user);
            if(response.status === 200 || response.status === 201) {
                navigate('/');
            }
        } else {
            const response = await Apicalls.createUser(user);
            if(response.status === 200 || response.status === 201) {
                navigate('/');
            }
        }
        setEditing(false);
        setCurrentUserId('');
        setCurrentUserId('');
        localStorage.setItem('userid', '')
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Create / Edit User</h1>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={user.name || ''} onChange={handleInputChange} required  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" name="email" value={user.email || ''} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phone" value={user.phone || ''} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" name="age" value={user.age || ''} onChange={handleInputChange} />
                </Form.Group>
                <div className="col-md-3 float-end mb-3">
                    <Button size="lg" type="submit" variant="outline-primary">Submit</Button>
                </div>
            </Form>
            </Container>
        </div>
    );
}

export default CreateEditUser;