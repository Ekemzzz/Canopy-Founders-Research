import { Search } from 'lucide-react';

export default function SearchInput({ id, label, value, onChange, placeholder = 'Search by name' }) {
  return (
    <label className="search-control" htmlFor={id}>
      <span className="search-icon"><Search size={17} aria-hidden="true" /></span>
      <span className="visually-hidden">{label}</span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  );
}
