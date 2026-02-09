import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

// Import logos
import kclLogo from '../assets/images/logos/kcl.png';
import nokiaLogo from '../assets/images/logos/nokia.png';
import politoLogo from '../assets/images/logos/polito.png';
import unimoreLogo from '../assets/images/logos/unimore.png';
import ispLogo from '../assets/images/logos/isp.png';

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)', position: 'relative' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={kclLogo} alt="KCL" style={{ position: 'absolute', top: '16px', right: '16px', height: '40px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">Post Doctoral Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">King's College London, London, UK</h4>
            <p>
              Large Language Models, Participatory AI, Trustworthy AI, Human-Centered AI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <img src={politoLogo} alt="Polito" style={{ position: 'absolute', top: '16px', right: '16px', height: '60px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">Research Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Politecnico di Torino, Turin, Italy</h4>
            <p>
              NLP for Inclusive Language, Trustworthy AI
            </p>

            {/* Nested KCL Visiting Period */}
            <div className="nested-experiences">
              <div className="nested-experience-item">
                <div className="nested-content">
                  <h5 className="nested-title">Visiting Researcher (Sep-Dec 2024)</h5>
                  <p className="nested-subtitle">King's College London, London, UK</p>
                  <p className="nested-description">Fairness in NLP</p>
                </div>
                <img src={kclLogo} alt="KCL" className="nested-logo" />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <img src={politoLogo} alt="Polito" style={{ position: 'absolute', top: '16px', right: '16px', height: '60px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">Ph.D. Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">Politecnico di Torino, Turin, Italy</h4>
            <p>
              Trustworthy AI, Natural Language Processing, Fairness, Explainable AI
            </p>

            {/* Nested Nokia Internships */}
            <div className="nested-experiences">
              <div className="nested-experience-item">
                <div className="nested-content">
                  <h5 className="nested-title">Research Intern (Summer 2023)</h5>
                  <p className="nested-subtitle">Nokia Bell Labs, Cambridge, UK</p>
                  <p className="nested-description">Summer Research Internship</p>
                </div>
                <img src={nokiaLogo} alt="Nokia" className="nested-logo" />
              </div>
              <div className="nested-experience-item">
                <div className="nested-content">
                  <h5 className="nested-title">Research Intern (Summer 2022)</h5>
                  <p className="nested-subtitle">Nokia Bell Labs, Cambridge, UK</p>
                  <p className="nested-description">Summer Research Internship</p>
                </div>
                <img src={nokiaLogo} alt="Nokia" className="nested-logo" />
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <img src={ispLogo} alt="ISP" style={{ position: 'absolute', top: '16px', right: '16px', height: '45px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">IT Junior Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Intesa San Paolo, Turin, Italy</h4>
            <p>
              Project Management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <img src={politoLogo} alt="Polito" style={{ position: 'absolute', top: '16px', right: '16px', height: '60px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">Master Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Politecnico di Torino, Turin, Italy</h4>
            <p>
              Master Degree in Computer Engineering
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2013 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <img src={unimoreLogo} alt="Unimore" style={{ position: 'absolute', top: '16px', right: '16px', height: '45px', width: 'auto' }} />
            <h3 className="vertical-timeline-element-title">Bachelor Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Università di Modena e Reggio Emilia, Modena, Italy</h4>
            <p>
              Bachelor Degree in Computer Engineering
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;