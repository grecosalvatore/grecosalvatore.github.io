import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';

function ConceptDrift() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        // Scroll to projects section after navigation
        setTimeout(() => {
            const projectsElement = document.getElementById('projects');
            if (projectsElement) {
                projectsElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="project-page">
            <div className="project-hero" style={{ '--accent-color': '#3b82f6' } as React.CSSProperties}>
                <a href="/#projects" className="back-button" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Projects</span>
                </a>

                <div className="hero-content">
                    <FontAwesomeIcon icon={faChartLine} className="hero-icon" />
                    <h1>Concept Drift Detection</h1>
                    <p className="hero-subtitle">
                        Ensuring AI models remain accurate over time
                    </p>
                </div>
            </div>

            <div className="project-content">
                <section className="project-section">
                    <h2>Overview</h2>
                    <p>
                        Identifying and adapting to performance degradation in NLP systems over time,
                        ensuring models remain accurate and reliable as language and data distributions evolve.
                    </p>
                </section>

                <section className="project-section">
                    <h2>Research Focus</h2>
                    <ul>
                        <li>Drift Detection Algorithms</li>
                        <li>Model Performance Monitoring</li>
                        <li>Temporal Adaptation Strategies</li>
                        <li>Real-time Performance Tracking</li>
                        <li>Model Robustness Over Time</li>
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

export default ConceptDrift;