import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { founders } from '../data/founders.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import PersonCard from '../components/PersonCard.jsx';
import SourceList from '../components/SourceList.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function FoundersPage() {
  usePageMeta('Canopy Network Founders | Inside Canopy', 'Source-backed profiles of publicly identified Canopy Network founders.');

  return (
    <div className="page directory-page">
      <div className="page-kicker"><Link to="/" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> Home</Link><span>Directory / 01</span></div>
      <section className="page-intro">
        <p className="eyebrow">Founders / public record</p>
        <h1>The people who<br /><em>started Canopy.</em></h1>
        <p className="page-intro-copy">These profiles reflect what Canopy’s public team listing, project materials, and cited sources establish. The depth of public information is not the same for each founder.</p>
        <div className="intro-source"><span>Primary reference</span><a href="https://www.canopynetwork.org/about" target="_blank" rel="noopener noreferrer">Canopy Network — About <ArrowUpRight size={14} aria-hidden="true" /></a></div>
      </section>
      <SectionHeading eyebrow="Three founders identified" title="Founding team" description="Open a profile to see the supporting sources and the limits of the public record." />
      <div className="person-grid person-grid--directory">
        {founders.map((person) => <PersonCard key={person.id} person={person} categoryText="" showTopline={false} />)}
      </div>
      <div className="directory-note">
        <span className="note-index">EDITOR’S NOTE / 01</span>
        <p>“Co-founder” identifies a founding relationship; it does not imply a current executive position. Current titles and background details are stated only where cited sources support them.</p>
        <SourceList sourceIds={['canopy-about', 'canopy-whitepaper']} title="Core references" compact labelOverrides={{ 'canopy-whitepaper': "Canopy's Whitepaper " }} />
      </div>
    </div>
  );
}
