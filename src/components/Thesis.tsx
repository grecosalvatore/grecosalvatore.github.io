import React from "react";
import '../assets/styles/Thesis.scss';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';

function Thesis() {
  return (
    <div id="thesis" className="thesis-container">
      <div className="thesis-section">
        <h1 className="section-title">
          PhD Thesis
        </h1>

        <div className="thesis-content">
          <h2 className="thesis-title">
            Inspecting Deep NLP Models: Innovative Techniques for Explainability,
            Fairness, and Concept Drift in Natural Language Classification
          </h2>

          <div className="thesis-meta">
            <p><strong>Author:</strong> Salvatore Greco</p>
            <p><strong>Institution:</strong> Politecnico di Torino</p>
            <p><strong>Defense Date:</strong> October 28, 2024</p>
          </div>

          <div className="thesis-abstract">
            <h3>Short Abstract</h3>
            <p>
              In the last decade, NLP has experienced remarkable advancements, achieving
              performance levels previously unimaginable, with models even surpassing human
              performance in certain tasks. However, despite their accuracy and capabilities,
              deep learning-based NLP models still face several challenges that limit their
              trustworthiness and responsible use in real-world applications.
            </p>
            <p>
              This research addresses these challenges by designing innovative techniques for
              inspecting deep learning NLP classifiers to increase their transparency, fairness,
              and robustness. We focus on three major challenges: (1) Explaining predictions;
              (2) Identifying and mitigating bias; (3) Detecting performance degradation over
              time due to concept and data drift.
            </p>
          </div>

          <div className="thesis-buttons">
            <a
              href="/thesis/Greco_PhD_Thesis_2024.pdf"
              className="thesis-button download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon /> Download PDF
            </a>
            <a
              href="https://hdl.handle.net/20.500.14242/170882"
              target="_blank"
              rel="noopener noreferrer"
              className="thesis-button repository"
            >
              <LinkIcon /> View on Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thesis;