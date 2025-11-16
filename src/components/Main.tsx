import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Main.scss';
import me from '../assets/images/me.jpeg';
import { SiBluesky as RawBluesky, SiGooglescholar as RawGoogleScholar } from "react-icons/si";
import type { IconBaseProps } from "react-icons";

const SiBluesky = RawBluesky as React.ComponentType<IconBaseProps>;
const SiGoogleScholar = RawGoogleScholar as React.ComponentType<IconBaseProps>;

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />;
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://scholar.google.com/citations?user=d8-6Up8AAAAJ" target="_blank" rel="noreferrer" className="social-link"><SiGoogleScholar size={28} /></a>
            <a href="https://github.com/grecosalvatore" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/salvatore-greco-8a27a5142/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/_salvatoregreco" target="_blank" rel="noreferrer"><XIcon/></a>
            <a href="https://bsky.app/profile/salvatoregreco.bsky.social" target="_blank" rel="noreferrer" className="social-link"><SiBluesky size={28} /></a>
          </div>
          <h1 style={{ marginBottom: '0' }}>Salvatore Greco</h1>
          <h2 style={{ marginTop: '-0.85rem' }}>Postdoctoral Researcher</h2>
          {/* <p>Centre for Data Futures, King's College London</p> */}

          <div className="mobile_social_icons">
            <a href="https://scholar.google.com/citations?user=d8-6Up8AAAAJ" target="_blank" rel="noreferrer" className="social-link"><SiGoogleScholar size={28} /></a>
            <a href="https://github.com/grecosalvatore" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/salvatore-greco-8a27a5142/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/_salvatoregreco" target="_blank" rel="noreferrer"><XIcon/></a>
            <a href="https://bsky.app/profile/salvatoregreco.bsky.social" target="_blank" rel="noreferrer" className="social-link"><SiBluesky size={28} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;