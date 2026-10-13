import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function NotFoundPage() {
  usePageMeta('Page not found | Inside Canopy', 'The requested page is not in the Inside Canopy directory.');

  return (
    <section className="page not-found-page">
      <p className="eyebrow">404 / page not found</p>
      <h1>This trail<br /><em>ends here.</em></h1>
      <p>The address may have changed, or this page may not belong to the public-source directory.</p>
      <div className="not-found-actions">
        <Link className="button button-primary" to="/">Return home <ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className="text-link" to="/team"><ArrowLeft size={14} aria-hidden="true" /> Browse the people</Link>
      </div>
    </section>
  );
}
