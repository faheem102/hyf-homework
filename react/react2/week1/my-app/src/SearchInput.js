import { useContext } from "react";
import { QueryContext } from "./GithubUsers";
export const SearchInput = () => {
  const { query, setQuery } = useContext(QueryContext);
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };
  return (
    <input
      autoFocus
      placeholder="Search Github User..."
      type="text"
      onChange={handleSearchChange}
      value={query}
    />
  );
};
