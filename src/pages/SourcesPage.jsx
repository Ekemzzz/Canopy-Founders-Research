import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BookOpenCheck, CircleHelp } from 'lucide-react';
import { sources } from '../data/sources.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import SourceLink from '../components/SourceLink.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function SourcesPage() {
  usePageMeta('Sources & Methodology | Inside Canopy', 'How Inside Canopy researches, attributes, updates, and corrects its independent directory.');
  const groupedSources = Object.entries(sources.reduce((groups, source) => {
    groups[source.type] ??= [];
    groups[source.type].push(source);
    return groups;
  }, {})).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="page sources-page">
      <div className="page-kicker"><Link to="/" className="back-link"><ArrowLeft size={14} aria-hidden="true" /> Home</Link><span>Research / 04</span></div>
      <section className="page-intro">
        <p className="eyebrow">Sources / method</p>
        <h1>Evidence stays<br /><em>in the frame.</em></h1>
        <p className="page-intro-copy">Inside Canopy is an independent research project. This page shows where the directory’s factual claims come from and how the record is handled when it is incomplete.</p>
      </section>

      <section id="verification" className="method-section">
        <div className="method-section-heading"><BookOpenCheck size={20} aria-hidden="true" /><p className="eyebrow">01 / Verification</p></div>
        <div className="method-text-grid">
          <h2>Start with the source closest to the fact.</h2>
          <div>
            <p>Official Canopy pages establish how the project describes its team and products. Public professional profiles, interviews, conference materials and public project records can add context. An individual’s own profile is attributed as self-reported; a project listing is not treated as proof of current employment unless the evidence supports that claim.</p>
            <p>When evidence is sparse or sources disagree, the profile narrows its wording and says what remains uncertain. No identity is inferred from a wallet address, and no private information is included.</p>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="method-section-heading"><CircleHelp size={20} aria-hidden="true" /><p className="eyebrow">02 / Attribution</p></div>
        <div className="method-text-grid">
          <h2>Facts, perspectives, and limits.</h2>
          <div>
            <p>Each page links to relevant public sources. Company announcements are attributed to Canopy; personal career details are attributed to the person’s public profile; independent reporting is identified by publisher. Product claims and performance descriptions are reported as the source’s claims, not as independently validated results.</p>
            <p>Inside Canopy is not Canopy Network’s official website and does not claim endorsement, affiliation, review or collaboration. The requester-supplied Canopy Network logo is shown only to identify the subject of this independent research; its reuse rights have not been independently verified. The dark-green interface and editorial layout remain this project’s own design choices.</p>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="method-section-heading"><span className="method-number">03</span><p className="eyebrow">Images & rights</p></div>
        <div className="method-text-grid">
          <h2>People aren’t placeholders.</h2>
          <div>
            <p>The site includes portraits supplied by the requester for Adam Liposky, Andrew Nguyen, Shawn Regan, Pablo Ocampo and Eric Nielson, plus Roniel Valdez’s image from Canopy’s team page. Reuse rights for these portraits have not been independently verified; confirm permission or replace/remove them before public deployment.</p>
            <p>The Canopy Network logo was also supplied by the requester. Its reuse rights have not been independently verified; confirm permission or use a licensed replacement before public deployment.</p>
          </div>
        </div>
      </section>

      <section className="method-section">
        <div className="method-section-heading"><span className="method-number">04</span><p className="eyebrow">Updates</p></div>
        <div className="method-text-grid">
          <h2>A dated research snapshot.</h2>
          <div>
            <p>These records were reviewed on 11 October 2026. Roles, project pages and professional profiles can change. When the site is updated, claims should be rechecked against the linked source and the review date should be revised.</p>
            <p>Corrections should identify the profile or milestone and link to a public source that supports the correction. No external inbox or public repository is connected yet, so this section describes the correction standard rather than pretending that a submission channel is live.</p>
            <p id="corrections" className="correction-note">Correction standard: source, claim, suggested wording, and date checked. A repository or contact route can be added when one is configured.</p>
          </div>
        </div>
      </section>

      <section className="source-catalog">
        <SectionHeading eyebrow="Source index" title={`${sources.length} public references`} description="Publisher and source type are shown so readers can distinguish official statements, professional profiles, public code records and independent reporting." />
        {groupedSources.map(([type, grouped]) => (
          <section className="source-group" key={type}>
            <div className="source-group-heading"><h3>{type}</h3><span>{String(grouped.length).padStart(2, '0')}</span></div>
            <ul className="source-catalog-list">
              {grouped.map((source) => (
                <li key={source.id}>
                  <div className="source-catalog-copy">
                    <SourceLink url={source.url} label={source.title} publisher={source.publisher} />
                    <p>{source.description}</p>
                  </div>
                  <span className="source-type-label">{source.type}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <aside className="method-footer-note">
        <p className="eyebrow">Independent / community research</p>
        <p>For project updates and documented milestones, consult <a href="https://www.canopynetwork.org/" target="_blank" rel="noopener noreferrer">Canopy Network’s official site <ArrowUpRight size={13} aria-hidden="true" /></a>. This directory remains a separate, source-backed archive.</p>
      </aside>
    </div>
  );
}
