import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Teaching.scss';

function Teaching() {
    return (
        <div className="container" id="teaching">
            <div className="teaching-container">
                <h1>Teaching</h1>
                <div className="teaching-grid">
                    <div className="teaching-item">
                        <div className="teaching-header">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x"/>
                            <h3>Explainable and Trustworthy AI</h3>
                        </div>
                        <p className="institution">MSc course at Politecnico di Torino</p>
                        <div className="academic-years">
                            <FontAwesomeIcon icon={faCalendarAlt} className="year-icon" />
                            <span className="year-badge">2023/2024</span>
                        </div>
                        <p className="description">
                        Advanced techniques for interpreting machine learning and deep learning models, and for designing reliable and transparent AI systems.
                        </p>
                    </div>

                    <div className="teaching-item">
                        <div className="teaching-header">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x"/>
                            <h3>Data Science and Machine Learning for Engineering Applications</h3>
                        </div>
                        <p className="institution">MSc course at Politecnico di Torino</p>
                        <div className="academic-years">
                            <FontAwesomeIcon icon={faCalendarAlt} className="year-icon" />
                            <span className="year-badge">2023/2024</span>
                            <span className="year-badge">2022/2023</span>
                        </div>
                        <p className="description">
                        Theoretical and practical introduction to data science and machine learning techniques for analyzing engineering data using Python.
                        </p>
                    </div>

                    <div className="teaching-item">
                        <div className="teaching-header">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x"/>
                            <h3>Applied Data Science Project</h3>
                        </div>
                        <p className="institution">MSc course at Politecnico di Torino</p>
                        <div className="academic-years">
                            <FontAwesomeIcon icon={faCalendarAlt} className="year-icon" />
                            <span className="year-badge">2021/2022</span>
                        </div>
                        <p className="description">
                            Project-based course where students apply data science and AI methods to real-world industrial problems.
                        </p>
                    </div>

                    <div className="teaching-item">
                        <div className="teaching-header">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x"/>
                            <h3>DataBases</h3>
                        </div>
                        <p className="institution">“BSc course at Politecnico di Torino”</p>
                        <div className="academic-years">
                            <FontAwesomeIcon icon={faCalendarAlt} className="year-icon" />
                            <span className="year-badge">2022/2023</span>
                            <span className="year-badge">2021/2022</span>
                        </div>
                        <p className="description">
                            Introduction to relational database design, SQL, and fundamental principles of data management.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Teaching;