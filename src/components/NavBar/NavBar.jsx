import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import './NavBar.css';

const NavBar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <button
        className={`nav-button ${activeTab === 'trending' ? 'active' : ''}`}
        onClick={() => setActiveTab('trending')}
      >
        <FaStar className="nav-icon" />
        <span>Trending</span>
      </button>
      <button
        className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => setActiveTab('settings')}
      >
        <FiSettings className="nav-icon" />
        <span>Settings</span>
      </button>
    </nav>
  );
};

export default NavBar;