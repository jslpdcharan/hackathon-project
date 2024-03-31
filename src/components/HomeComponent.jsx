import React from 'react';
import placeholderImage from '../images/92_banner.jpg'; // Correct path to your image
import "../styles/styles.css";
import image1 from "../images/cs_background.jpeg";
const HomeComponent = () => {
    return (

        <div className="App">
            <main>
                <div className="container">
                    <img src={placeholderImage} alt="University Campus"/>
                    <div className="home-overlay">
                        <h1>LEARN. SHARE. GROW.</h1>
                    </div>
                </div>

                {/* Main content - Image and Description Side by Side */}
                <div className="content-wrapper">
                    {/* Image 1 and Description 1 */}
                    <div className="content-block">
                        <div className="description">
                            <h1>Computer Science at OSU</h1>
                            <p>Computer Sciences is the study of the theory of computing and algorithms and their applications to solve real-world problems. This is a rapidly-developing field with applications in all areas of human endeavor. The discipline encompasses many specialized subfields with different theoretical models and focuses on practical problem solving. Courses in the OSU Computer Science program teach students the latest technology in software development with hands-on experience with tools and frameworks supported by learning labs. The Department of Computer Science takes pride in providing a safe, diverse, and inclusive learning environment that facilitates close interaction with faculty with the goal to ensure the success of every student.</p>
                        </div>
                        <img src={image1} alt="Purpose"/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomeComponent;
