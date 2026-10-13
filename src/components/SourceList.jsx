import { sourceById } from '../data/sources.js';
import SourceLink from './SourceLink.jsx';

export default function SourceList({ sourceIds = [], title = 'Sources', compact = false, labelOverrides = {} }) {
  const resolved = [...new Set(sourceIds)].map((id) => sourceById[id]).filter(Boolean);
  if (!resolved.length) return null;

  return (
    <section className={`source-list${compact ? ' source-list--compact' : ''}`} aria-label={title}>
      <h3 className="source-list-title">{title}</h3>
      <ol>
        {resolved.map((source, index) => (
          <li key={source.id}>
            <span className="source-number">{String(index + 1).padStart(2, '0')}</span>
            <SourceLink url={source.url} label={labelOverrides[source.id] ?? source.title} publisher={source.publisher} compact={compact} />
          </li>
        ))}
      </ol>
    </section>
  );
}
