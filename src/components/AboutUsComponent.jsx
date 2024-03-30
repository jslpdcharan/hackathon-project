import React from 'react';
import image from '../images/bestpaperheader.jpg';
import image1 from '../images/cyber_security_banner.jpg';
import image2 from '../images/pete-lab.jpg';
import image3 from '../images/download.jpeg';
import '../styles/styles.css'; // Importing the CSS file

function AboutUs() {
    return (
        <div className="App">
            <main>
                <div className="container">
                    <img src={image} alt="University Campus"/>
                    <div className="overlay">
                        <h1>About CS GSA</h1>
                    </div>
                </div>

                {/* Main content - Image and Description Side by Side */}
                <div className="content-wrapper">
                    {/* Image 1 and Description 1 */}
                    <div className="content-block">
                        <div className="description">
                            <h1>Purpose</h1>
                            <p>The CS-GSA is the official organization of graduate students represented in the CS
                                Department. Its mission is
                                to raise awareness among Oklahoma State University students and the public about the
                                potential and
                                opportunities of computer science.</p>
                        </div>
                        <img src={image1} alt="Purpose"/>
                    </div>

                    {/* Image 2 and Description 2 */}
                    <div className="content-block">
                        <img src={image2} alt="Mission"/>
                        <div className="description">
                            <h1>Mission</h1>
                            <p>To achieve this goal, the organization creates a communication and
                                collaboration forum among CS graduate students and arranges seminars, lectures, and
                                workshops as needed.
                                Additionally, it serves as a representative body that safeguards the interests of CS
                                graduate students concerning
                                Oklahoma State University and the CS department.</p>
                        </div>
                    </div>

                    {/* Image 3 and Description 3 */}
                    <div className="content-block">
                        <div className="description">
                            <h1>Transforming tomorrow</h1>
                            <p>The CS-GSA also organizes social activities for graduate
                                students in the CS department. Furthermore, it acts as a means of education and
                                engagement regarding CS
                                graduate students’ rights, privileges, and responsibilities, while promoting and
                                assisting graduate research and
                                creative activities by informing potential fellowships, assistantships, and travel
                                grants.</p>
                        </div>
                        <img src={image3} alt="Transforming tomorrow"/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutUs;
