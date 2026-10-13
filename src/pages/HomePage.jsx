import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, CircleDot, ExternalLink, Fingerprint, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import { founders } from '../data/founders.js';
import { milestones } from '../data/milestones.js';
import { sources } from '../data/sources.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import PersonCard from '../components/PersonCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TimelineItem from '../components/TimelineItem.jsx';
import SourceLink from '../components/SourceLink.jsx';

export default function HomePage() {
  usePageMeta('Inside Canopy | The People Behind Canopy', 'An independent, source-backed exploration of the people, ideas, and milestones behind Canopy Network.');
  const featuredFounders = founders;
  const featuredMilestones = milestones.slice(0, 3);
  const aboutSource = sources.find((source) => source.id === 'canopy-about');

  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Meet the <em>minds</em><br />behind Canopy.</h1>
          <p className="hero-description">A careful look at the people, ideas, and public milestones shaping Canopy Network.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/team">Explore the team <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="button button-quiet" to="/timeline">Discover the story <ArrowDown size={15} aria-hidden="true" /></Link>
          </div>
          <div className="hero-meta"><span>Independent / not official</span><span>·</span><span>Research snapshot: 11 Oct 2026</span></div>
        </div>
        <div className="hero-art" aria-label="A visual index of the research archive">
          <div className="hero-orbit hero-orbit--outer" />
          <div className="hero-orbit hero-orbit--inner" />
          <div className="hero-node hero-node--one"><span>01</span><i /></div>
          <div className="hero-node hero-node--two"><span>02</span><i /></div>
          <div className="hero-node hero-node--three"><span>03</span><i /></div>
          <div className="hero-center-mark"><Trees size={42} strokeWidth={1.2} aria-hidden="true" /><span>PUBLIC<br />RECORD</span></div>
          <div className="hero-art-caption"><span className="mono-label" /><span /></div>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">SCROLL TO EXPLORE</div>
      </section>

      <section className="stat-strip" aria-label="Research snapshot">
        <div><span className="stat-number">03</span><span className="stat-label">Founders identified</span></div>
        <div><span className="stat-number">07</span><span className="stat-label">Public profiles reviewed</span></div>
        <div><span className="stat-number">06</span><span className="stat-label">Dated milestones</span></div>
        <div><span className="stat-number">100%</span><span className="stat-label">Claims linked to sources</span></div>
      </section>

      <section className="section-block section-about">
        <div className="section-index"><span>01</span><span className="section-index-line" /><span>Context</span></div>
        <div className="about-grid">
          <div>
            <p className="eyebrow">The project</p>
            <h2>Networks are built<br />by <em>people first.</em></h2>
          </div>
          <div className="about-copy">
            <p>Canopy Network describes a framework for building application-specific blockchain networks. Its public materials outline a path where a project can begin with shared security and, as it grows, move toward operating as an independent network.</p>
            <p>This site is an independent guide to the people and public record around that work. Official Canopy statements are attributed as such; our role is to organize the evidence, not speak for the project.</p>
            <div className="about-links">
              <SourceLink url={aboutSource.url} label="Canopy Network. About" publisher="Official source" compact />
              <Link className="text-link" to="/sources">How we research <ArrowUpRight size={14} aria-hidden="true" /></Link>
            </div>
            <p className="micro-note"><CircleDot size={13} aria-hidden="true" /> All descriptions are paraphrased and source-linked.</p>
          </div>
        </div>
      </section>

      <section className="section-block section-people">
        <div className="section-index"><span>02</span><span className="section-index-line" /><span>People</span></div>
        <SectionHeading
          eyebrow="The founding team"
          title="The Team Behind The Project"
          description="Profiles begin with what public sources actually establish. Background varies; the record stays visible."
          action={<Link className="text-link" to="/founders">All founders <ArrowUpRight size={14} aria-hidden="true" /></Link>}
        />
        <div className="person-grid person-grid--featured">
          {featuredFounders.map((person) => <PersonCard key={person.id} person={person} featured />)}
        </div>
        <Link className="section-follow-link" to="/team">Explore all publicly listed people <ArrowRight size={15} aria-hidden="true" /></Link>
      </section>

      <section className="section-block section-story">
        <div className="section-index"><span>03</span><span className="section-index-line" /><span>Timeline</span></div>
        <SectionHeading
          eyebrow="Project journey"
          title="A timeline in public."
          description="A handful of dated moments, assembled from announcements and corroborating public records."
          action={<Link className="text-link" to="/timeline">Full timeline <ArrowUpRight size={14} aria-hidden="true" /></Link>}
        />
        <div className="timeline-list timeline-list--preview">
          {featuredMilestones.map((milestone) => <TimelineItem key={milestone.id} milestone={milestone} />)}
        </div>
      </section>

      <section className="methodology-callout">
        <div className="method-icon"><Fingerprint size={25} strokeWidth={1.5} aria-hidden="true" /></div>
        <div className="method-copy">
          <p className="eyebrow">Our method</p>
          <h2>Evidence before inference.</h2>
          <p>We start with official sources, then corroborate roles and history with public professional profiles, interviews, and project records. When the evidence stops, so does the claim.</p>
        </div>
        <Link className="method-link" to="/sources" aria-label="Read sources and methodology"><BookOpen size={19} aria-hidden="true" /><span>Read the method</span><ArrowUpRight size={14} aria-hidden="true" /></Link>
      </section>

      <section className="closing-note">
        <p className="eyebrow">A living archive</p>
        <p>Public records change. This directory was reviewed on <strong>11 October 2026</strong>; each profile points back to its sources so the next update can start with evidence.</p>
        <Link className="text-link" to="/sources#corrections">Corrections and updates <ExternalLink size={13} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
