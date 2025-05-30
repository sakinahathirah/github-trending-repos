import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { format, subDays } from 'date-fns';
import { fetchTrendingRepos } from '../../services/githubService';
import RepoCard from '../../components/RepoCard/RepoCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './Trending.css';

const Trending = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const date10DaysAgo = subDays(new Date(), 10);

  const loadRepos = async () => {
    try {
      setIsLoading(true);
      const newRepos = await fetchTrendingRepos(date10DaysAgo, page);
      
      if (newRepos.length === 0) {
        setHasMore(false);
      } else {
        setRepos(prevRepos => [...prevRepos, ...newRepos]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (err) {
      setError('Failed to fetch repositories. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={loadRepos} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="trending-page">
      <header className="trending-header">
        <h1>Trending Repos</h1>
      </header>
      
      <div className="trending-container">
        <p className="trending-subtitle">
          Most starred repositories created in the last 10 days
        </p>

        <InfiniteScroll
          dataLength={repos.length}
          next={loadRepos}
          hasMore={hasMore}
          loader={<LoadingSpinner />}
          endMessage={
            <p className="end-message">
              You've seen all trending repositories!
            </p>
          }
        >
          <div className="repos-list">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Trending;