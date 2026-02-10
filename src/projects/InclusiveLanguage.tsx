import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';

function InclusiveLanguage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const projectsElement = document.getElementById('projects');
            if (projectsElement) {
                projectsElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="project-page">
            <div className="project-hero" style={{ '--accent-color': '#10b981' } as React.CSSProperties}>
                <a href="/#projects" className="back-button" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Projects</span>
                </a>

                <div className="hero-content">
                    <FontAwesomeIcon icon={faComments} className="hero-icon" />
                    <h1>Inclusive Language</h1>
                    <p className="hero-subtitle">
                        Developing tools for inclusive language assessment
                    </p>
                </div>
            </div>

            <div className="project-content">
                <section className="project-section">
                    <h2>Overview</h2>
                    <p>
                        Creating technologies and methodologies for assessing and promoting inclusive language
                        across multiple languages, with focus on gender-inclusive communication and bias mitigation.
                    </p>
                </section>

                <section className="project-section">
                    <h2>Research Focus</h2>
                    <ul>
                        <li>Inclusive Language Assessment Tools</li>
                        <li>Gender-Inclusive Communication</li>
                        <li>Multilingual Inclusivity Analysis</li>
                        <li>Bias Detection and Mitigation</li>
                        <li>Language Policy Compliance</li>
                    </ul>
                </section>

                <section className="project-section">
                    <h2>Key Contributions</h2>
                    <p>
                        [Add your specific contributions here]
                    </p>
                </section>

                <section className="project-section">
                    <h2>Publications</h2>
                    <p>
                        [Add your related publications here]
                    </p>
                </section>
            </div>
        </div>
    );
}

export default InclusiveLanguage;