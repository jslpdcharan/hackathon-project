import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/pete_face.png';

const CommitteeMembers = () => {
    const [committeeMembers, setCommitteeMembers] = useState([]);
    const [memberResponsibilities, setMemberResponsibilities] = useState({});

    const fetchData = async () => {
        try {
            const membersResponse = await axios.get('http://localhost:3001/api/committe_members');
            setCommitteeMembers(membersResponse.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchResponsibilities = async (role) => {
        if (!memberResponsibilities[role]) {
            try {
                const responsibilityResponse = await axios.get('http://localhost:3001/api/get_responsibilities', {
                    params: { role },
                });
                setMemberResponsibilities({ ...memberResponsibilities, [role]: responsibilityResponse.data });
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchData();
        committeeMembers.forEach((member) => fetchResponsibilities(member.m_role));
    }, [committeeMembers]);
    return (
        <div className="container">
            {committeeMembers.map((member) => (
                <div
                    key={member.m_name}
                    className="row mb-4 p-3 align-items-center"
                    style={{
                        borderColor: 'orange', // Adding an orange border
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderRadius: '0.25rem', // Rounded corners
                        backgroundColor: '#fff', // Assuming a white background
                        boxShadow: '0 2px 4px rgba(0,0,0,.1)' // A subtle shadow for depth
                    }}
                >
                    <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex align-items-center justify-content-center p-2">
                        <img src={image} alt={member.m_name} className="img-fluid" style={{ maxWidth: '100px' }}/>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-8 col-12">
                        <h4 style={{color: 'orange'}}>{member.m_role}</h4> {/* Role in orange */}
                        <p><strong>Name:</strong> {member.m_name}</p>
                        <p>
                            <strong>Email:</strong>
                            <a href={`mailto:${member.m_email}`} style={{marginLeft: '5px',color:'black'}}>
                                {member.m_email}
                            </a>
                        </p>                        <p><strong>Role:</strong> {member.m_role}</p>
                        <p><strong>Level:</strong> {member.m_level}</p>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12 text-start">
                        <h4 style={{color: 'orange'}}>Responsibilities</h4> {/* Responsibilities header in orange */}
                        {memberResponsibilities[member.m_role] && (
                            <ul>
                                {memberResponsibilities[member.m_role].map((responsibility, index) => (
                                    <li key={index}>{responsibility.m_responsibility}</li>
                                ))}
                            </ul>
                        )}
                        {!memberResponsibilities[member.m_role] && <p>Loading...</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommitteeMembers;
