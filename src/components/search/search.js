import React, { useState } from 'react';
import './search.scss';

const Search = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userData, setUserData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userNameInput}`)
      .then((res) => res.json())
      .then((res) => setUserData(res));
  };
  return (
    <div className="cardContainer">
      <div>
        <h1>Search for github users</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={userNameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
        />
        <button>Find</button>
      </form>
      {userData !== null ? (
        <div className="github-container">
          <div className="github-container__profile">
            <img src={userData.avatar_url} />
            <h2>{userData.name}</h2>
          </div>
          <p>{userData.bio}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
