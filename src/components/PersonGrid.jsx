import PersonCard from './PersonCard.jsx';
import EmptyState from './EmptyState.jsx';

export default function PersonGrid({ people, emptyTitle = 'No profiles found', emptyDescription = 'Try a different search or clear the filters.' }) {
  if (!people.length) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="person-grid">
      {people.map((person) => <PersonCard key={person.id} person={person} />)}
    </div>
  );
}
