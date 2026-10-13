import { sourceById } from '../data/sources.js';
import { externalLinkProps, isSafeExternalUrl } from '../utils/urls.js';

export default function CitationRefs({ sourceIds = [], orderedSourceIds = [] }) {
  const refs = [...new Set(sourceIds)]
    .map((id) => ({ id, source: sourceById[id], number: orderedSourceIds.indexOf(id) + 1 }))
    .filter(({ source, number }) => source && number > 0 && isSafeExternalUrl(source.url));

  if (!refs.length) return null;

  return (
    <span className="citation-refs" aria-label="Supporting sources">
      {refs.map(({ id, source, number }) => (
        <a key={id} href={source.url} {...externalLinkProps(source.url)} aria-label={`Source ${number}: ${source.title}`}>
          [{number}]
        </a>
      ))}
    </span>
  );
}
