import React, { useState } from "react";
import Axios from 'axios';
import ImagePath from "../images/pete-headshot.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [records, setRecords] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateData, setUpdateData] = useState({ name: '', email: '', level: '',old_email: ''});
    const navigate = useNavigate();

    const home_page = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const authenticate_admin = (e) => {
        e.preventDefault(); // Prevent default form submission
        Axios.post('http://localhost:3001/api/admin_login', {
            username: username,
            password: password
        })
            .then(response => {
                console.log(response);
                if(response.data.success) {
                    setIsLoggedIn(true);
                    fetchRecords();
                } else {
                    alert('Incorrect username or password');
                }
            })
            .catch(error => {
                alert("An error occurred. Please try again later.");
            });

        resetForm();
    };
    const fetchRecords = () => {
        Axios.get('http://localhost:3001/api/committe_members')
            .then(response => {
                setRecords(response.data);
                console.log(records);
            })
            .catch(error => {
                alert("Error fetching Committee Members records, Please try again");
            });
    };
    const updateRecord = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/api/update_committee_member', updateData)
            .then(response => {
                    setIsUpdating(false);
                    fetchRecords();
            })
            .catch(error => {
                console.error("Error updating record:", error);
                alert("Failed to update record. Please try again later.");
            });
    };
    const showUpdateForm = (record) => {
        setIsUpdating(true);
        setUpdateData({ ...record, old_email: record.m_email });
    };

    const resetForm = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div style={{
            backgroundImage: `url(${ImagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            display: 'flex',
            opacity:'2.0',
            alignItems: 'center'
        }}>
            {!isLoggedIn ? (
                <div className="container" style={{backgroundColor: "ghostwhite", padding: "20px", borderRadius: "10px", maxWidth: "400px"}}>
                    <h2 className="mb-4 text-center">Admin Login</h2>
                    <form onSubmit={authenticate_admin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            ) : (
                <div className="container mt-5">
                    {isUpdating ? (
                        <div className="container">
                            <h2>Update Record</h2>
                            <form onSubmit={updateRecord}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" value={updateData.name}
                                           onChange={(e) => setUpdateData({...updateData, name: e.target.value})}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" value={updateData.email}
                                           onChange={(e) => setUpdateData({...updateData, email: e.target.value})}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="level">Level</label>
                                    <input type="text" className="form-control" id="level" value={updateData.level}
                                           onChange={(e) => setUpdateData({...updateData, level: e.target.value})}
                                           required/>
                                </div>
                                <button type="submit" className="btn btn-success">Update</button>
                                <button onClick={() => setIsUpdating(false)} className="btn btn-secondary ml-2">Cancel
                                </button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <h1>Committee Members of CS-GSA</h1>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {records.map((record, index) => (
                                    <tr key={index}>
                                        <td>{record.m_name}</td>
                                        <td>{record.m_email}</td>
                                        <td>{record.m_level}</td>
                                        <td>{record.m_role}</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    onClick={() => showUpdateForm(record)}>Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <button className="btn btn-secondary" onClick={home_page}>Logout</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default AdminLogin;
