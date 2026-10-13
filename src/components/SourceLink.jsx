import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { externalLinkProps, isSafeExternalUrl } from '../utils/urls.js';

export default function SourceLink({ url, label, publisher, compact = false }) {
  if (!isSafeExternalUrl(url)) {
    return <span className="source-link source-link--invalid">Source unavailable</span>;
  }

  return (
    <a className={`source-link${compact ? ' source-link--compact' : ''}`} href={url} {...externalLinkProps(url)}>
      <span className="source-link-copy">
        <span>{label}</span>
        {publisher && <small>{publisher}</small>}
      </span>
      {compact ? <ArrowUpRight size={14} aria-hidden="true" /> : <ExternalLink size={14} aria-hidden="true" />}
    </a>
  );
}
