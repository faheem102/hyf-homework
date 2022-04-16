export const SearchInput = ({ handleSearchChange, searchValue }) => {
  return (
    <input
      autoFocus
      placeholder="Search Github User..."
      type="text"
      onChange={handleSearchChange}
      value={searchValue}
    />
  );
};
