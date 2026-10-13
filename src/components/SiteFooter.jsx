import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark.jsx';
import SourceLink from './SourceLink.jsx';

const canopyWebsite = {
  url: 'https://www.canopynetwork.org/',
  label: 'Canopy Network ↗',
};

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-lead">
          <Link to="/" aria-label="Inside Canopy home"><BrandMark /></Link>
          <p>A public-record guide to the people and milestones behind Canopy Network.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link to="/founders">Founders</Link>
          <Link to="/team">Team directory</Link>
          <Link to="/timeline">Project timeline</Link>
          <Link to="/sources">Sources & methodology</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Research</span>
          <SourceLink url={canopyWebsite.url} label="Official Canopy site" />
          <a href="https://github.com/canopy-network" target="_blank" rel="noopener noreferrer">Canopy on GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
          <Link to="/sources#corrections">Corrections & updates</Link>
        </div>
        <div className="footer-note">
          <span className="footer-label">A note on independence</span>
          <p>Inside Canopy is an independent community research project. It is not affiliated with, endorsed by, or maintained by Canopy Network.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Inside Canopy</span>
        <span>Built from public sources. Last reviewed 11 October 2026.</span>
        <Link to="/sources">Read our method <span aria-hidden="true">↗</span></Link>
      </div>
    </footer>
  );
}
