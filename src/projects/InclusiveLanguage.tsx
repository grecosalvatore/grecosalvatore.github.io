import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments, faArrowLeft, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/ProjectPage.scss';
import {faGithub} from "@fortawesome/free-brands-svg-icons";

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
                    <div className="publications-list">
                        <div className="publication-item">
                            <div className="publication-number">[1]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>Towards AI-Assisted Inclusive Language Writing in Italian Formal Communications</h3>
                                    <span className="publication-year">2025</span>
                                </div>
                                <p className="authors">S. Greco, M La Quatra, L. Cagliero, T. Cerquitelli</p>
                                <p className="venue">ACM Transactions on Intelligent Systems and Technology, vol. 15, n. 4</p>
                                <div className="publication-links">
                                    <a href="https://dl.acm.org/doi/full/10.1145/3729237" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/MorenoLaQuatra/inclusively" target="_blank" rel="noopener noreferrer" className="pub-link">
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
                                    <h3>Inclusively: An AI-Based Assistant for Inclusive Writing</h3>
                                    <span className="publication-year">2023</span>
                                </div>
                                <p className="authors">M La Quatra, S. Greco, L. Cagliero, T. Cerquitelli</p>
                                <p className="venue">Machine Learning and Knowledge Discovery in Databases: Applied Data Science and Demo Track. ECML PKDD</p>
                                <div className="publication-links">
                                    <a href="https://link.springer.com/chapter/10.1007/978-3-031-43430-3_31" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                    <a href="https://github.com/MorenoLaQuatra/inclusively" target="_blank" rel="noopener noreferrer" className="pub-link">
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
                                    <h3>Building Foundations for Inclusiveness through Expert-Annotated Data</h3>
                                    <span className="publication-year">2024</span>
                                </div>
                                <p className="authors">M La Quatra, S. Greco, L. Cagliero, M. Tonti, F. Dragotto, R. Raus, S. Cavagnoli, T. Cerquitelli</p>
                                <p className="venue">Proceedings of the Workshops of the EDBT/ICDT 2024 Joint Conference</p>
                                <div className="publication-links">
                                    <a href="https://ceur-ws.org/Vol-3651/DARLI-AP-3.pdf" target="_blank" rel="noopener noreferrer" className="pub-link">
                                        <FontAwesomeIcon icon={faFileAlt} />
                                        <span>Paper</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-item">
                            <div className="publication-number">[4]</div>
                            <div className="publication-content">
                                <div className="publication-header">
                                    <h3>E-MIMIC: Empowering Multilingual Inclusive Communication</h3>
                                    <span className="publication-year">2021</span>
                                </div>
                                <p className="authors">G. Attanasio, S. Greco, M La Quatra, L. Cagliero, T. Cerquitelli</p>
                                <p className="venue">2021 IEEE International Conference on Big Data (Big Data)</p>
                                <div className="publication-links">
                                    <a href="https://ieeexplore.ieee.org/abstract/document/9671868" target="_blank" rel="noopener noreferrer" className="pub-link">
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

export default InclusiveLanguage;