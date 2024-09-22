import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchUserData(searchTerm);
      setUserData(response);
    } catch (error) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt="User Avatar" />
          <a href={userData.html_url}>View Profile</a>
        </div>
      )}
    </div>
  );
}

export default Search;