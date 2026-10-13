export default function RoleFilter({ id, value, onChange, categories }) {
  return (
    <label className="filter-control" htmlFor={id}>
      <span className="filter-label">Role category</span>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">All categories</option>
        {categories.map((category) => <option value={category} key={category}>{category}</option>)}
      </select>
    </label>
  );
}
