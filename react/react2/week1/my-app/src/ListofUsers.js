import React from "react";
export const ListofUsers = ({ usersList }) => {
  if (!usersList) {
    return null;
  }
  if (usersList.length < 1) {
    return <h2>No Result</h2>;
  }
  return usersList.map((user) => (
    <>
      <h3 key={user.id}>{user.login}</h3>
      <img
        className="user-image"
        src={user.avatar_url}
        alt="Profile picture for ${user.login}"
      ></img>
    </>
  ));
};
