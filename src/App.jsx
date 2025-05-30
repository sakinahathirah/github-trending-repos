import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Trending from './pages/Trending/Trending';
import Settings from './pages/Settings/Settings';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="app">
      <main className="main-content">
        {activeTab === 'trending' ? <Trending /> : <Settings />}
      </main>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;