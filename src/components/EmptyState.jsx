import { SearchX } from 'lucide-react';

export default function EmptyState({ title = 'No profiles found', description = 'Try a different search or clear the filters.' }) {
  return (
    <div className="empty-state" role="status">
      <SearchX size={24} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
