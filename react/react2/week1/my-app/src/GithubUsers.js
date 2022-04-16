import { useState, useEffect } from "react";
import "./Githubsearch.css";
import { SearchInput } from "./SearchInput";

export function GithubUsers() {
  const [apiData, setApiData] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/search/users?q=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setErrorMessage("Enter a valid username in the search");
          setLoading(false);
        } else {
          setApiData(data.items);
          setErrorMessage(null);
          setLoading(false);
        }
      });
  }, [searchValue]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="App">
      <h1>Github User Search</h1>
      <SearchInput
        handleSearchChange={handleSearchChange}
        searchValue={searchValue}
      />
      {loading && <p>Loading Profiles....</p>}
      {errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        <ListofUsers apiData={apiData} />
      )}
    </div>
  );
}

const ListofUsers = ({ apiData }) => {
  if (apiData) {
    return apiData.map((user) => (
      <>
        <h3 key={user.id}>{user.login}</h3>
        <img
          className="user-image"
          src={user.avatar_url}
          alt="images of profile pics"
        ></img>
      </>
    ));
  }
};
