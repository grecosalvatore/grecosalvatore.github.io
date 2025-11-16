import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import XIcon from "@mui/icons-material/X";

import { SiBluesky as RawBluesky, SiGooglescholar as RawGoogleScholar } from "react-icons/si";
import type { IconBaseProps } from "react-icons";

const SiBluesky = RawBluesky as React.ComponentType<IconBaseProps>;
const SiGoogleScholar = RawGoogleScholar as React.ComponentType<IconBaseProps>;

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://scholar.google.com/citations?user=d8-6Up8AAAAJ" target="_blank" rel="noreferrer" className="social-link"><SiGoogleScholar size={28} /></a>
            <a href="https://github.com/grecosalvatore" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/salvatore-greco-8a27a5142/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://x.com/_salvatoregreco" target="_blank" rel="noreferrer"><XIcon/></a>
            <a href="https://bsky.app/profile/salvatoregreco.bsky.social" target="_blank" rel="noreferrer" className="social-link"><SiBluesky size={28} /></a>
      </div>
      {/* <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p> */}
      <p>© 2025 Salvatore Greco</p>
    </footer>
  );
}

export default Footer;