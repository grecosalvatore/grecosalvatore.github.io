import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowLeft, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
                        Developed novel unsupervised approaches for detecting concept drift in deep learning models
                        by analyzing internal representations [1], enabling real-time monitoring without labeled data.
                        Created DriftLens [2, 3], a practical tool for visualizing and analyzing model performance degradation
                        over time in production systems.
                    </p>
                </section>

                <section className="project-section">
                    <h2>Publications</h2>
                    <div className="publications-list">
                        <div className="publication-item">
                            <div className="publication-number">[1]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>Unsupervised Concept Drift Detection From Deep Learning Representations in Real-Time</h3>
                                    <span className="publication-year">2025</span>
                                </div>
                                <p className="authors">S. Greco, B. Vacchetti, D. Apiletti, T. Cerquitelli</p>
                                <p className="venue">IEEE Transactions on Knowledge and Data Engineering, vol. 37, no. 10, pp. 6232-6245</p>
                                <div className="publication-links">
                                    <a href="https://doi.org/10.1109/TKDE.2025.3593123" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/grecosalvatore/drift-lens" target="_blank" rel="noopener noreferrer" className="pub-link">
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
                                    <h3>Explaining Concept Drift via Neuro-Symbolic Rules</h3>
                                    <span className="publication-year">2025</span>
                                </div>
                                <p className="authors">P. Basci, S. Greco, F. Manigrasso, T. Cerquitelli, L. Morra</p>
                                <p className="venue">Proceedings of TRUST-AI: The European Workshop on Trustworthy AI, ECAI 2025</p>
                                <div className="publication-links">
                                    <a href="https://ceur-ws.org/Vol-4132/short54.pdf" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/grecosalvatore/neurosymbolic-explainable-concept-drift" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-item">
                            <div className="publication-number">[3]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>DriftLens: A Concept Drift Detection Tool</h3>
                                    <span className="publication-year">2024</span>
                                </div>
                                <p className="authors">S. Greco, B. Vacchetti, D. Apiletti, T. Cerquitelli</p>
                                <p className="venue">EDBT 2024, pp. 806-809</p>
                                <div className="publication-links">
                                    <a href="https://openproceedings.org/2024/conf/edbt/paper-239.pdf" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/grecosalvatore/DriftLensDemo" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faGithub} />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-item">
                            <div className="publication-number">[4]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>Drift Lens: Real-time unsupervised Concept Drift detection by evaluating per-label embedding distributions</h3>
                                    <span className="publication-year">2021</span>
                                </div>
                                <p className="authors">S. Greco, T. Cerquitelli</p>
                                <p className="venue">2021 International Conference on Data Mining Workshops (ICDMW), pp. 341-349</p>
                                <div className="publication-links">
                                    <a href="https://ieeexplore.ieee.org/abstract/document/9679880" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
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

export default ConceptDrift;