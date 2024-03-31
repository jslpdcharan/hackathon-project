import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div key={member.m_name} className="row mb-4 border rounded p-3">
                    <div className="col-md-6 " style={{padding: "20px"}}>
                        <br></br>
                        <br></br>

                        <h4>{member.m_role}</h4>
                        <p>Name: {member.m_name}</p>
                        <p>Email: {member.m_email}</p>
                        <p>Role: {member.m_role}</p>
                        <p>Level: {member.m_level}</p>
                    </div>
                    <div className="col-md-6 text-start">
                        <h4>{member.m_role} Responsibilities</h4>
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
