import React from "react";
import '../assets/styles/About.scss';

function About() {
    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p className="intro">
                        I'm a Postdoctoral Researcher at the <strong>Centre for Data Futures, King's College London</strong>.
                        My current work focuses on <strong>LLM Uncertainty, Participatory AI, and Trustworthy AI</strong>.
                        I aim to design AI systems that are not only powerful but also ethical, human-centered, collaborative, and that enhance rather than obscure human insight and critical-thinking.
                    </p>

                    <p>
                        I am deeply committed to building AI technologies that are <strong>fair, inclusive, transparent,</strong> and <strong>robust</strong> over time.
                        My past research has explored methods for developing <strong>Trustworthy AI</strong>, with a particular focus on <strong>Natural Language Processing</strong>.
                    </p>

                    <p>
                        I earned my <strong>Ph.D. in Artificial Intelligence</strong> from <strong>Politecnico di Torino</strong> in 2024, with a thesis titled
                        <i> "Inspecting Deep NLP Models: Innovative Techniques for Explainability, Fairness, and Concept Drift in Natural Language Classification." </i>
                        During my doctoral research, I proposed novel approaches for model explainability, fairness assessment, and concept drift detection in NLP systems—contributing to the broader goal of building more transparent and reliable AI.
                        I also explored ways to design AI tools that help humans adopt more inclusive language practices.
                    </p>

<div className="research-interests">
  <h2>Research Interests</h2>
  <p>
    My research focuses on building <strong>trustworthy AI systems</strong>, with an emphasis on
    <strong> Natural Language Processing (NLP)</strong> and developing AI tools for social good.
    I am particularly interested in the following areas:
  </p>

  <ul>
    <li>
      <strong>Explainable AI (XAI):</strong> Improving transparency and interpretability in AI systems
    </li>
    <li>
      <strong>Fairness:</strong> Evaluating, detecting, and mitigating bias in machine learning models
    </li>
    <li>
      <strong>Robustness:</strong> Ensuring models remain reliable and effective as data and real-world contexts evolve
    </li>
    <li>
      <strong>Uncertainty Quantification:</strong> Measuring and communicating model confidence to support safer decision-making
    </li>
    <li>
      <strong>Human–Computer Interaction (HCI):</strong> Human-centered design, co-creation, and collaborative intelligence
    </li>
    <li>
      <strong>NLP for Inclusivity and Diversity:</strong> Detecting and reducing stereotypes and non-inclusive language in human writing
    </li>
  </ul>
</div>

                </div>
                {/*
                <div className="about-stats">
                    <div className="stat-card">
                        <h2>15+</h2>
                        <p>Research Publications</p>
                    </div>
                    <div className="stat-card">
                        <h2>4+</h2>
                        <p>Years in AI Research</p>
                    </div>
                    <div className="stat-card">
                        <h2>3</h2>
                        <p>Active Competitions</p>
                    </div>
                </div>
                */}
            </div>
        </div>
    );
}

export default About;