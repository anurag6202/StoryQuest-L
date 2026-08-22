function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search games..."
      value={value}
      onChange={onChange}
      className="
      w-full
      bg-zinc-900
      p-3
      rounded-xl
      outline-none
      border
      border-zinc-800
      "
    />
  );
}

export default SearchBar;