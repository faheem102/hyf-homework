import { useState, useEffect, createContext } from "react";
import "./Githubsearch.css";
import { SearchInput } from "./SearchInput";
import { ListofUsers } from "./ListofUsers";
export const QueryContext = createContext({
  query: "",
  setQuery: () => {},
});

export function GithubUsers() {
  const [usersList, setUsersList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://api.github.com/search/users?q=${searchValue}`)
      .then((response) => response.json())
      .then((payload) => {
        setUsersList(payload.items);
      })
      .catch((error) => {
        setErrorMessage(`error fetching ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue]);

  return (
    <div className="App">
      <h1>Github User Search</h1>
      <QueryContext.Provider
        value={{ query: searchValue, setQuery: setSearchValue }}
      >
        <SearchInput />
      </QueryContext.Provider>
      {loading && <p>Loading Profiles....</p>}
      {errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <ListofUsers usersList={usersList} />
      )}
    </div>
  );
}
