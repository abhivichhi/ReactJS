import React, { useEffect, useState } from 'react';
import Apicalls from "./Apicalls";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/Table";

const UserManage = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser ] = useState({ name: '', email: '' });
    const [editing, setEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
        console.log(users);
    }, []);

    const fetchUsers = async () => {
        const response = await Apicalls.getAllUsers();
        console.log(response);
        setUsers(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser ({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await Apicalls.updateUser (currentUserId, user);
        } else {
            await Apicalls.createUser (user);
        }
        setUser ({ name: '', email: '' });
        setEditing(false);
        fetchUsers();
    };

    const handleEdit = (user) => {
        setUser ({ name: user.name, email: user.email });
        setEditing(true);
        setCurrentUserId(user.id);
    };

    const handleDelete = async (id) => {
        await Apicalls.deleteUser (id);
        fetchUsers();
    };

    return (
        <div>
            <h1>User Management</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Company</th>
                    <th>Edit/Delete</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.city}</td>
                        <td>{user.company.name}</td>
                        <td><Link to="/edit">Edit</Link> <Link to="/delete">Delete</Link></td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}- {user.phone}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManage;
