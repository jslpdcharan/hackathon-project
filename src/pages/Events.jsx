import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagePath from '../images/pete-headshot.jpg'

const EventPage = () => {
    const [eventsByDate, setEventsByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            const params = selectedDate ? { params: { date: selectedDate } } : {};
            try {
                const response = await axios.get('http://localhost:3001/api/get_events',params);
                const sortedEvents = response.data.sort((a, b) => new Date(a.e_date) - new Date(b.e_date));
                const groupedByDate = sortedEvents.reduce((acc, event) => {
                    const date = event.e_date;
                    if (!acc[date]) {
                        acc[date] = [];
                    }
                    acc[date].push(event);
                    return acc;
                }, {});
                setEventsByDate(groupedByDate);
            } catch (error) {
                console.error("Error fetching events:", error);
                alert("Error Fetching the Scheduled Events!!");
            }
        };

        fetchEvents();
    }, [selectedDate]);
    const noEvents = Object.keys(eventsByDate).length === 0;


    return (
        <div style={{
            backgroundImage: `url(${ImagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                minHeight: '100vh',
            }}>
                <div className="container mt-4">
                    <h1 className="mb-4" style={{color: 'rgb(255 105 0)'}}>Events</h1>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="form-control mb-4"
                    />
                    {noEvents ? (
                            <div className="text-center" style={{ backgroundColor: 'rgb(255 102 0 / 81%)', color: 'white', padding: '10px' }}>
                                No Events Scheduled
                            </div>
                        ) :(
                    Object.keys(eventsByDate).map(date => (
                        <div key={date}>
                            <h3 className="mb-3" style={{color: "black"}}>
                                {new Date(date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </h3>
                            {
                                (eventsByDate[date].map((event, index) => (
                                    <div key={index} className="card mb-4">
                                    <div className="card-header text-white" style={{backgroundColor: 'rgb(255 69 0 / 74%)'}}>
                                        {event.e_name}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text"><strong>Time:</strong> {event.e_time}</p>
                                        <p className="card-text"><strong>Location:</strong> {event.e_location}</p>
                                        <p className="card-text"><strong>Description:</strong> {event.e_description}</p>
                                        <p className="card-text"><strong>Contact:</strong> {event.e_contact_details}</p>
                                    </div>
                                </div>
                            )))}
                        </div>
                    )))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
