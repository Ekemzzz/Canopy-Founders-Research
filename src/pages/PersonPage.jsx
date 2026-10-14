import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { personBySlug } from '../data/people.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import SourceList from '../components/SourceList.jsx';
import CitationRefs from '../components/CitationRefs.jsx';
import SourceLink from '../components/SourceLink.jsx';
import { externalLinkProps, isSafeExternalUrl } from '../utils/urls.js';

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

export default function PersonPage() {
  const { slug } = useParams();
  const person = personBySlug[slug];
  const [failedProfileSlug, setFailedProfileSlug] = useState('');
  usePageMeta(
    person ? `${person.name} | Inside Canopy` : 'Profile not found | Inside Canopy',
    person ? `Independent, source-backed profile of ${person.name}. Public records associate this person with ${person.verifiedRole}; current Canopy employment is not implied.` : 'This profile could not be found in the Inside Canopy directory.',
  );

  if (!person) {
    return (
      <div className="page not-found-page">
        <p className="eyebrow">Profile / not found</p>
        <h1>This record<br /><em>isn’t here.</em></h1>
        <p>The profile may have moved, or it may not be part of this public-source directory.</p>
        <Link className="button button-primary" to="/team">Return to the directory</Link>
      </div>
    );
  }

  const directoryPath = person.memberType === 'Founder' ? '/founders' : '/team';
  const orderedSourceIds = [...new Set(person.sourceIds)];
  const profileBreadcrumbPrefix = person.profileBreadcrumbPrefix ?? 'Profile /';
  const profileEyebrow = person.profileEyebrow ?? `${person.memberType} / ${person.category}`;
  const profileImageCandidate = person.profileImage || person.image;
  const isResolvableProfileImage = typeof profileImageCandidate === 'string'
    && (profileImageCandidate.startsWith('/manus-storage/')
      || (profileImageCandidate.startsWith('https://') && isSafeExternalUrl(profileImageCandidate)));
  const profileImageUrl = isResolvableProfileImage && failedProfileSlug !== slug ? profileImageCandidate : '';

  return (
    <div className="page profile-page">
      <div className="page-kicker"><Link to={directoryPath} className="back-link"><ArrowLeft size={14} aria-hidden="true" /> {person.memberType === 'Founder' ? 'Founders' : 'Team'}</Link><span>{profileBreadcrumbPrefix} {person.id.toUpperCase()}</span></div>
      <section className="profile-hero">
        <div className={`profile-monogram${profileImageUrl ? ' profile-monogram--photo' : ''}`} aria-hidden={profileImageUrl ? undefined : 'true'}>
          {profileImageUrl ? (
            <img
              className="profile-monogram-image"
              src={profileImageUrl}
              alt={person.profileImageAlt || person.imageAlt || `Portrait of ${person.name}`}
              loading="eager"
              decoding="async"
              onError={() => setFailedProfileSlug(slug)}
            />
          ) : initials(person.name)}
        </div>
        <div className="profile-hero-copy">
          <p className="eyebrow">{profileEyebrow}</p>
          <h1>{person.name}</h1>
          <p className="profile-role">{person.verifiedRole}</p>
          <p className="profile-timeframe">{person.roleTimeframe}</p>
          <div className="profile-links">
            {person.profileLinks.map((link) => (
              <SourceLink key={link.url} url={link.url} label={link.label} compact />
            ))}
          </div>
        </div>
      </section>

      <div className="profile-body-grid">
        <aside className="profile-rail">
          <span className="mono-label">PUBLIC RECORD</span>
          <p>{person.statusNote}</p>
          <span className="profile-reviewed">Reviewed 11 October 2026</span>
        </aside>
        <div className="profile-content">
          <section className="profile-section">
            <p className="eyebrow">Overview</p>
            <h2>What the sources say.</h2>
            <p className="profile-biography">{person.biography} <CitationRefs sourceIds={orderedSourceIds} orderedSourceIds={orderedSourceIds} /></p>
          </section>

          {person.professionalBackground.length > 0 && (
            <section className="profile-section">
              <p className="eyebrow">Career notes</p>
              <h2>Before and beyond Canopy.</h2>
              <ul className="fact-list">
                {person.professionalBackground.map((fact, index) => (
                  <li key={`${person.id}-background-${index}`}>
                    <span className="fact-marker" aria-hidden="true">↗</span>
                    <p>{fact.text} <CitationRefs sourceIds={fact.sourceIds} orderedSourceIds={orderedSourceIds} /></p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="profile-section">
            <p className="eyebrow">Documented work</p>
            <h2>Canopy contributions.</h2>
            {person.documentedContributions.length > 0 ? (
              <ul className="fact-list">
                {person.documentedContributions.map((fact, index) => (
                  <li key={`${person.id}-contribution-${index}`}>
                    <span className="fact-marker" aria-hidden="true">↗</span>
                    <p>{fact.text} <CitationRefs sourceIds={fact.sourceIds} orderedSourceIds={orderedSourceIds} /></p>
                  </li>
                ))}
              </ul>
            ) : <p>No person-specific public contribution was verified in the sources reviewed.</p>}
          </section>

          {person.publicMedia.length > 0 && (
            <section className="profile-section">
              <p className="eyebrow">Public appearances</p>
              <h2>In their own words.</h2>
              <ul className="media-list">
                {person.publicMedia.map((item) => (
                  <li key={item.url}>
                    <div><span className="media-type">{item.format}</span><strong>{item.title}</strong></div>
                    {isSafeExternalUrl(item.url) && <a href={item.url} {...externalLinkProps(item.url)} aria-label={`Open ${item.title}`}><ExternalLink size={16} aria-hidden="true" /></a>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="profile-section profile-source-section">
            <p className="eyebrow">Source file / {orderedSourceIds.length} references</p>
            <h2>Read the record.</h2>
            <SourceList sourceIds={orderedSourceIds} title="Sources supporting this profile" />
            <Link className="text-link" to="/sources#verification">How we describe evidence <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </section>
        </div>
      </div>
    </div>
  );
}
