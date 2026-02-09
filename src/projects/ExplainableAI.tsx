import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';

function ExplainableAI() {
    const navigate = useNavigate();

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
            <div className="project-hero" style={{ '--accent-color': '#8b5cf6' } as React.CSSProperties}>
                <a href="/#projects" className="back-button" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Projects</span>
                </a>

                <div className="hero-content">
                    <FontAwesomeIcon icon={faLightbulb} className="hero-icon" />
                    <h1>Explainable AI</h1>
                    <p className="hero-subtitle">
                        Making AI decisions transparent and understandable
                    </p>
                </div>
            </div>

            <div className="project-content">
                <section className="project-section">
                    <h2>Overview</h2>
                    <p>
                        Developing innovative techniques to interpret and explain deep learning models,
                        making AI decisions transparent and understandable for both experts and end-users.
                    </p>
                </section>

                <section className="project-section">
                    <h2>Research Focus</h2>
                    <ul>
                        <li>Model Interpretability</li>
                        <li>Feature Attribution Methods</li>
                        <li>Attention Mechanism Analysis</li>
                        <li>SHAP and LIME Techniques</li>
                        <li>Visual Explanations for NLP</li>
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

export default ExplainableAI;