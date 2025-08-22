import React, {useEffect, useState} from 'react';
import Apicalls from "./Apicalls";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        localStorage.setItem('userid', '')
        fetchUsers();
    }, []);

    function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(null);
            await sleep(2000);
            const response = await Apicalls.getAllUsers();
            setUsers(response.data);
        } catch (err) {
            setError('Failed to fetch users. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = async (userid) => {
        localStorage.setItem('userid', userid)
        navigate('/createedituser');
    };

    const handleDelete = async (id) => {
        const response = await Apicalls.deleteUser(id);
        if (response.status === 200 || response.status === 201) {
            fetchUsers();
        }
    };

    return (
        <Container>
            <h1 style={{textAlign: "center"}}>User Management</h1>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
            <div className="col-md-3 float-end mb-3">
                <Link to="/createedituser"
                      className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >Create New User</Link>
            </div>
            {loading ? (
                <div className="loading">
                    <span className="spinner"></span>
                    Loading users...
                </div>
            ) : users.length === 0 ? (
                <p>No users found. Add your first user!</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.age}</td>
                            <td><Button size="sm" variant="outline-primary"
                                        onClick={() => handleEdit(user.id)}>Edit</Button></td>
                            <td><Button size="sm" variant="outline-danger" onClick={() => {
                                if (window.confirm('Are you sure want to delete?')) {
                                    handleDelete(user.id)
                                }
                            }}>Delete</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default UserManagement;
