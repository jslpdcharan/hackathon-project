import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagePath from '../images/osu_alumni_center_banner.jpg';
import IconPath from '../images/linkedin.jpeg'; // Replace with the actual path to your icon

const AlumniPage = () => {
    const [alumniByYear, setAlumniByYear] = useState({});

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/alumni_members');
                const alumni = response.data; // Assuming the API returns an array of alumni
                const alumniGroupedByYear = alumni.reduce((acc, curr) => {
                    const year = curr.a_year_of_enrollment;
                    if (!acc[year]) {
                        acc[year] = [];
                    }
                    acc[year].push(curr);
                    return acc;
                }, {});
                setAlumniByYear(alumniGroupedByYear);
            } catch (error) {
                console.error("Error fetching alumni:", error);
            }
        };
        fetchAlumni();
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${ImagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                minHeight: '100vh',
            }}>
                <div className="container mt-4">
                    <h1 style={{
                        backgroundColor: '#ff7900ed', /* Sets the background to orange */
                        color: 'white', /* Sets the text color to white */
                        alignContent: 'center', /* Centers the text horizontally */
                        padding: '10px 0', /* Adds padding above and below the text */
                        margin: '0', /* Removes default margin around the <h1> */
                        width: '100%', /* Ensures the background color spans the full width of the page */
                    }}>Alumni Members By Year</h1>
                    {Object.keys(alumniByYear).sort().map(year => (
                        <div key={year}>
                            <h3 className="my-3">{year}</h3>
                            <div className="row">
                                {alumniByYear[year].map((alumnus, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 mb-4">
                                        <div className="card h-100"
                                             onClick={() => window.open('https://www.linkedin.com/school/oklahoma-state-university/', '_blank')}>
                                            <div className="card-body" style={{cursor: 'pointer'}}>
                                                <h5 className="card-title">
                                                    {alumnus.a_full_name}
                                                    <img
                                                        src={IconPath} // Your icon image path
                                                        alt="Icon"
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            marginLeft: '10px'
                                                        }} // Adjust size as needed
                                                    />

                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlumniPage;
