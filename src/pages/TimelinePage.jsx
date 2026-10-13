import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { milestones } from '../data/milestones.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';

export default function TimelinePage() {
  usePageMeta('Canopy Network Timeline | Inside Canopy', 'A dated, source-linked timeline of documented Canopy Network milestones.');
  const chronological = [...milestones].sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  return (
    <div className="page timeline-page">
      <div className="page-kicker"><Link to="/" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> Home</Link><span>Archive / 03</span></div>
      <section className="page-intro">
        <p className="eyebrow">Timeline / documented milestones</p>
        <h1>How the project<br /><em>took shape.</em></h1>
        <p className="page-intro-copy">A selective record of launches, releases and ecosystem developments. Dates follow the source: publication date and event date are kept distinct.</p>
      </section>
      <SectionHeading eyebrow="December 2025 — September 2026" title="Six moments, source-linked." description="The timeline is selective, not exhaustive. Open the source links attached to each entry to read the original announcement or corroboration." />
      <div className="timeline-page-list">
        {chronological.map((milestone) => <TimelineItem key={milestone.id} milestone={milestone} showSources />)}
      </div>
      <div className="timeline-endnote">
        <span className="note-index">EDITORIAL NOTE / DATE PRECISION</span>
        <p>The June 2026 entry groups the seed announcement and Tanssi acquisition at month level because the two events were announced on different dates. Canopy’s own announcement is distinguished from the date an article was published.</p>
        <Link to="/sources" className="text-link">Read the source policy <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
