import React from 'react';
import '../styles/club.css'; // Point this to your CSS file for ClubCardComponent

const ClubComponent = ({ title, description, imageUrl }) => {
    return (
        <div className="club-card">
            <div className="club-image-container">
                <img src={imageUrl} alt={title} className="club-image" />
            </div>
            <div className="club-info-container">
                <h3 className="club-name">{title}</h3>
                <p className="club-description">{description}</p>
            </div>
        </div>
    );
};

export default ClubComponent;
