import React from 'react';
import './RepoCard.css';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <div className="repo-header">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="repo-name"
        >
          {repo.name}
        </a>
        <div className="stars">
          ⭐ {repo.stargazers_count.toLocaleString()}
        </div>
      </div>
      <p className="repo-description">
        {repo.description || 'No description provided'}
      </p>
      <div className="owner-info">
        <img 
          src={repo.owner.avatar_url} 
          alt={`${repo.owner.login} avatar`} 
          className="owner-avatar"
        />
        <span className="owner-name">{repo.owner.login}</span>
      </div>
    </div>
  );
};

export default RepoCard;