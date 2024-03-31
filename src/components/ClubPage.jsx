import React from 'react';
import ClubComponent from './ClubComponent';
// Import images and data for the clubs
import clubImage1 from '../images/club1.jpeg';
import clubImage2 from '../images/club2.jpeg';
import clubImage3 from '../images/club3.jpeg';
import clubImage4 from '../images/club4.jpeg';
import clubImage5 from '../images/club5.jpeg';
import clubImage6 from '../images/club6.jpeg';
import clubImage7 from '../images/club7.jpeg';
// ... more imports

const clubData = [
    {
        title: 'Algorithms & Data Structures Club',
        description: 'Dive into the world of efficient problem-solving by exploring various algorithms and data structures. Weekly challenges and hackathons included',
        imageUrl: clubImage1,
    },
    {
        title: 'Cybersecurity Defense Team',
        description: 'Join forces to protect digital assets. Learn and apply cybersecurity techniques in simulations and competitions against hackers.',
        imageUrl: clubImage2,
    },
    {
        title: 'Artificial Intelligence Forum',
        description: 'Explore the realms of AI, from machine learning to neural networks. Regular talks by industry experts and collaborative projects.',
        imageUrl: clubImage3,
    },
    {
        title: 'Video Game Development Club',
        description: 'Immerse yourself in the creation of virtual worlds. Design, develop, and publish your own games while collaborating with fellow gaming enthusiasts.',
        imageUrl: clubImage4,
    },
    {
        title: 'Web Development Guild',
        description: 'Craft and code the web of tomorrow. From front-end designs to back-end services, sharpen your full-stack development skills.',
        imageUrl: clubImage5,
    },
    {
        title: 'Virtual Reality & Gaming Ensemble',
        description: 'Push the boundaries of interactive entertainment by designing immersive VR experiences and engaging video games.',
        imageUrl: clubImage6,
    },
    {
        title: 'Machine Learning Enthusiasts',
        description: 'Dive into the world of machine learning with projects, workshops, and collaboration to explore predictive analytics and AI technologies.',
        imageUrl: clubImage7,
    },
    // ... more club data
];

const ClubsPage = () => {
    return (
        <div>
        <h1 className="club-text">Clubs and Organizations</h1>

    <div className="clubs-page">
            {clubData.map((club, index) => (
                <ClubComponent
                    key={index}
                    title={club.title}
                    description={club.description}
                    imageUrl={club.imageUrl}
                />
            ))}
        </div>
        </div>
    );
};

export default ClubsPage;
