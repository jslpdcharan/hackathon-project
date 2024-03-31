import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultMemberImage from '../images/pete-headshot.jpg';

const CommitteeMembersPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/committe_members');
                setMembers(response.data);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div className="container mt-5">

            <div className="row" >
                {members.map((member, index) => (
                    <div key={index} className="col-lg-6 mb-4" >
                        <div className="card" >
                            <div style={{ width: '100%', height: '250px', overflow: 'hidden',padding:"20px" }}>
                                <img
                                    src={DefaultMemberImage}
                                    alt={`${member.m_name}`}
                                    className="img-fluid"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{member.m_name}</h5>
                                <p className="card-text">Email: {member.m_email}</p>
                                <p className="card-text">Level: {member.m_level}</p>
                                <p className="card-text">Role: {member.m_role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommitteeMembersPage;
