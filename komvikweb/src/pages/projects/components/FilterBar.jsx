export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <input
        type="text"
        placeholder="Suche nach Projekt..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <select
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={filter.type}
        onChange={(e) => setFilter({ ...filter, type: e.target.value })}
      >
        <option value="all">Alle</option>
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="desktop">Desktop</option>
      </select>
    </div>
  );
}
