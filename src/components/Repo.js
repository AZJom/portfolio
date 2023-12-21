// GitHub.js
import React, { useState, useEffect } from 'react';
import './styles/Repo.css'; // Import Repo.css

const GitHub = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/azjom/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <div className="github">
      <h2>GitHub Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHub;
