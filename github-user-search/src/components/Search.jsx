// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'searchTerm':
        setSearchTerm(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos':
        setMinRepos(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchUserData(searchTerm, location, minRepos);
      setUserData(response.items);
    } catch (error) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Search GitHub Users</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="input"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Location"
          className="input"
        />
        <input
          type="number"
          name="minRepos"
          value={minRepos}
          onChange={handleChange}
          placeholder="Minimum Repositories"
          className="input"
        />
        <button type="submit" className="btn">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <div key={user.id} className="card">
              <h2>{user.login}</h2>
              <img src={user.avatar_url} alt="User Avatar" />
              <p>Location: {user.location}</p>
              <p>Repositories: {user.public_repos}</p>
              <a href={user.html_url}>View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;