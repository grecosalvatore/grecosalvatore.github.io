import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';

function FairnessNLP() {
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
            <div className="project-hero" style={{ '--accent-color': '#ec4899' } as React.CSSProperties}>
                <a href="/#projects" className="back-button" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back to Projects</span>
                </a>

                <div className="hero-content">
                    <FontAwesomeIcon icon={faBalanceScale} className="hero-icon" />
                    <h1>Fairness in NLP</h1>
                    <p className="hero-subtitle">
                        Detecting and mitigating bias in language models
                    </p>
                </div>
            </div>

            <div className="project-content">
                <section className="project-section">
                    <h2>Overview</h2>
                    <p>
                        Detecting and mitigating gender stereotypes and biases in language models,
                        with focus on developing tools for inclusive language assessment across multiple languages.
                    </p>
                </section>

                <section className="project-section">
                    <h2>Research Focus</h2>
                    <ul>
                        <li>Bias Detection in Language Models</li>
                        <li>Stereotype Mitigation Techniques</li>
                        <li>Inclusive Language Technologies</li>
                        <li>Gender Fairness Analysis</li>
                        <li>Multilingual NLP Fairness</li>
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

export default FairnessNLP;