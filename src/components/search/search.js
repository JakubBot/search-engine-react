import React, { useState } from 'react';
import './search.scss';

const Search = () => {
  const [userNameInput, setUserNameInput] = useState('');
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${userNameInput}`)
      .then((res) => {
        if (!res.ok) {
          setIsError(true);
        } else {
          setIsError(false);
        }
        return res.json();
      })
      .then((res) => {
        setUserData(res);
        setIsLoading(false);
      });
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
      <div style={{ display: isLoading == true ? 'none' : 'block' }}>
        {isError ? (
          <h3>Something went wrong.Try again</h3>
        ) : (
          <div className="github-container">
            <div className="github-container__profile">
              <img src={userData.avatar_url} />
              <h2>{userData.name}</h2>
            </div>
            <p>{userData.bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
