import { useMemo, useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { team } from '../data/team.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import PersonGrid from '../components/PersonGrid.jsx';
import SearchInput from '../components/SearchInput.jsx';
import RoleFilter from '../components/RoleFilter.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SourceList from '../components/SourceList.jsx';

const categories = [...new Set(team.map((person) => person.category))].sort((a, b) => a.localeCompare(b));

export default function TeamPage() {
  usePageMeta('Canopy Network Team | Inside Canopy', 'Explore publicly documented people associated with Canopy Network, with careful source attribution.');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filteredTeam = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return team.filter((person) => {
      const description = person.shortBio.toLowerCase();
      const escapedQuery = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const exactDescriptionMatch = normalizedQuery && new RegExp(`\\b${escapedQuery}\\b`).test(description);
      const descriptionWords = description.split(/[^a-z0-9]+/).filter(Boolean);
      const descriptionPrefixMatch = normalizedQuery.length >= 5 && descriptionWords.some((word) => word.startsWith(normalizedQuery));
      const matchesQuery = !normalizedQuery || [person.name, person.verifiedRole].some((field) => field.toLowerCase().includes(normalizedQuery)) || exactDescriptionMatch || descriptionPrefixMatch;
      const matchesCategory = category === 'all' || person.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const hasFilters = query.trim() !== '' || category !== 'all';
  const resetFilters = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <div className="page directory-page">
      <div className="page-kicker"><Link to="/" className="back-link">← Home</Link><span>Directory / 02</span></div>
      <section className="page-intro">
        <p className="eyebrow">People / public record</p>
        <h1>Beyond the<br /><em>founding team.</em></h1>
        <p className="page-intro-copy">A searchable directory of people whom Canopy or project records publicly identify. Listings and activity are not treated as proof of current employment.</p>
      </section>

      <section className="directory-controls-section" aria-labelledby="team-directory-heading">
        <SectionHeading eyebrow="Team directory" title="Find a person" description="Search by name, role or a short description. Categories reflect only roles present in the researched records." as="h2" />
        <div className="directory-controls">
          <SearchInput id="team-search" label="Search team by name, role, or description" value={query} onChange={setQuery} placeholder="Search name, role, or keyword" />
          <RoleFilter id="team-role-filter" value={category} onChange={setCategory} categories={categories} />
          <button className="reset-button" type="button" onClick={resetFilters} disabled={!hasFilters}><RotateCcw size={15} aria-hidden="true" /> Reset</button>
        </div>
        <p className="result-count" aria-live="polite">Showing <strong>{filteredTeam.length}</strong> of {team.length} public profiles</p>
        <PersonGrid
          people={filteredTeam}
          emptyTitle="No matching people"
          emptyDescription="No public profiles match those filters. Clear the search or choose all categories to see the directory."
        />
      </section>

      <aside className="directory-note directory-note--caution">
        <span className="note-index">PUBLIC RECORD / STATUS</span>
        <div>
          <h2>Listed is not always current.</h2>
          <p>Canopy’s team page supplies several titles. For people whose public records do not establish current employment or tenure, the profile says so rather than turning a listing into a stronger claim.</p>
          <Link to="/sources#verification" className="text-link">Read the verification approach <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
        <SourceList sourceIds={['canopy-about', 'eric-linkedin', 'roniel-github', 'pablo-github']} title="Selected references" compact />
      </aside>
    </div>
  );
}
