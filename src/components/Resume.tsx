import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../assets/styles/Resume.scss';

// Set up PDF.js worker from public folder
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

function Resume() {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const resumePDF = '/salvatore_greco_cv.pdf';

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className="resume-container" id="resume">
            <div className="resume-content">
                <div className="resume-header">
                    <h1>Resume</h1>
                    <a href={resumePDF} download="Salvatore_Greco_Resume.pdf" className="download-button">
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download Resume</span>
                    </a>
                </div>

                <div className="resume-preview">
                    <Document
                        file={resumePDF}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="pdf-document"
                    >
                        <Page
                            pageNumber={pageNumber}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={Math.min(window.innerWidth * 0.8, 900)}
                        />
                    </Document>

                    {numPages > 1 && (
                        <div className="pdf-controls">
                            <button
                                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                                disabled={pageNumber <= 1}
                                className="page-button"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span className="page-info">
                                Page {pageNumber} of {numPages}
                            </span>
                            <button
                                onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                                disabled={pageNumber >= numPages}
                                className="page-button"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    )}
                </div>

                <div className="mobile-download">
                    <a href={resumePDF} download="Salvatore_Greco_Resume.pdf" className="download-button-mobile">
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download PDF Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;