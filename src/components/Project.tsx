import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBalanceScale, faChartLine, faComments, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Project.scss';

function Project() {
    const navigate = useNavigate();

    const projects = [
        {
            id: 'explainable-ai',
            title: 'Explainable AI',
            icon: faLightbulb,
            description: 'Developing innovative techniques to interpret and explain deep learning models, making AI decisions transparent and understandable for both experts and end-users.',
            keywords: ['Model Interpretability', 'Feature Attribution', 'Attention Mechanisms', 'SHAP', 'LIME'],
            color: '#8b5cf6',
            link: '/explainable-ai'
        },
        {
            id: 'fairness-nlp',
            title: 'Fairness in NLP',
            icon: faBalanceScale,
            description: 'Detecting and mitigating gender stereotypes and biases in language models, with focus on developing tools for inclusive language assessment across multiple languages.',
            keywords: ['Bias Detection', 'Stereotype Mitigation', 'Inclusive Language', 'Gender Fairness', 'Multilingual NLP'],
            color: '#ec4899',
            link: '/fairness-nlp'
        },
        {
            id: 'concept-drift',
            title: 'Concept Drift Detection',
            icon: faChartLine,
            description: 'Identifying and adapting to performance degradation in NLP systems over time, ensuring models remain accurate and reliable as language and data distributions evolve.',
            keywords: ['Drift Detection', 'Model Monitoring', 'Temporal Adaptation', 'Performance Tracking', 'Model Robustness'],
            color: '#3b82f6',
            link: '/concept-drift'
        },
        {
            id: 'inclusive-language',
            title: 'Inclusive Language',
            icon: faComments,
            description: 'Creating technologies and methodologies for assessing and promoting inclusive language across multiple languages, with focus on gender-inclusive communication and bias mitigation.',
            keywords: ['Language Assessment', 'Gender Inclusivity', 'Multilingual Analysis', 'Bias Mitigation', 'Policy Compliance'],
            color: '#10b981',
            link: '/inclusive-language'
        }
    ];

    const handleCardClick = (project: any) => {
        // Use React Router navigation
        navigate(project.link);
    };

    return (
        <div className="projects-container" id="projects">
            <div className="projects-header">
                <h1>Research Projects</h1>
                <p className="projects-subtitle">
                    Exploring the frontiers of Trustworthy AI through innovative research in explainability, fairness, and robustness
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => handleCardClick(project)}
                        style={{ '--accent-color': project.color } as React.CSSProperties}
                    >
                        <div className="project-icon">
                            <FontAwesomeIcon icon={project.icon} />
                        </div>
                        <h2>{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-keywords">
                            {project.keywords.map((keyword, index) => (
                                <span key={index} className="keyword-tag">{keyword}</span>
                            ))}
                        </div>
                        <div className="project-link">
                            <span>Explore Research</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;