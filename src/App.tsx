import React, {useState, useEffect} from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Main,
  About,
  Timeline,
  Project,
  Teaching,
  Thesis,
  Contact,
  Navigation,
  Footer,
  Resume,
} from "./components";
import { ExplainableAI, FairnessNLP, ConceptDrift } from "./projects";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Routes>
                {/* Main page with all sections */}
                <Route path="/" element={
                    <>
                        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                        <FadeIn transitionDuration={700}>
                            <Main/>
                            <About/>
                            <Timeline/>
                            <Project/>
                            <Teaching/>
                            <Thesis/>
                            <Resume/>
                            <Contact/>
                        </FadeIn>
                        <Footer />
                    </>
                } />

                {/* Individual project pages */}
                <Route path="/explainable-ai" element={
                    <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
                        <ExplainableAI />
                        <Footer />
                    </div>
                } />
                <Route path="/fairness-nlp" element={
                    <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
                        <FairnessNLP />
                        <Footer />
                    </div>
                } />
                <Route path="/concept-drift" element={
                    <div className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
                        <ConceptDrift />
                        <Footer />
                    </div>
                } />
            </Routes>
        </div>
    </Router>
    );
}

export default App;