import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb, faArrowLeft, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

function ExplainableAI() {
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
                    <div className="publications-list">
                        <div className="publication-item">
                            <div className="publication-number">[1]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>Trusting deep learning natural-language models via local and global explanations</h3>
                                    <span className="publication-year">2022</span>
                                </div>
                                <p className="authors">F. Ventura, S. Greco, D. Apiletti, T. Cerquitelli</p>
                                <p className="venue">Knowledge and Information Systems, vol. 64, no. 7, pp. 1863-1907</p>
                                <div className="publication-links">
                                    <a href="https://link.springer.com/article/10.1007/s10115-022-01690-9" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/EBAnO-Ecosystem/Text-EBAnO-Express" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-item">
                            <div className="publication-number">[2]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>Explaining deep convolutional models by measuring the influence of interpretable features in image classification</h3>
                                    <span className="publication-year">2024</span>
                                </div>
                                <p className="authors">F. Ventura, S. Greco, D. Apiletti, T. Cerquitelli</p>
                                <p className="venue">Data Mining and Knowledge Discovery, vol. 38, no. 5, pp. 3169-3226</p>
                                <div className="publication-links">
                                    <a href="https://link.springer.com/article/10.1007/s10618-023-00915-x" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/EBAnO-Ecosystem/EBAnO-Express/" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

export default ExplainableAI;