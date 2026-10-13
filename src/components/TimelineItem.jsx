import { GitCommitHorizontal } from 'lucide-react';
import SourceList from './SourceList.jsx';
import CitationRefs from './CitationRefs.jsx';

export default function TimelineItem({ milestone, showSources = false }) {
  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true"><GitCommitHorizontal size={16} /></div>
      <div className="timeline-item-header">
        <time className="timeline-date" dateTime={milestone.dateTime}>{milestone.date}</time>
        <span className="timeline-category">{milestone.category}</span>
      </div>
      <h3>{milestone.title}</h3>
      <p>{milestone.description} <CitationRefs sourceIds={milestone.sourceIds} orderedSourceIds={milestone.sourceIds} /></p>
      {showSources && <SourceList sourceIds={milestone.sourceIds} title="Sources for this milestone" compact />}
    </article>
  );
}
