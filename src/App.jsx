// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Logs from './components/Logs';
import Settings from './components/Settings';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const valid = ['dashboard', 'logs', 'settings'];
    if (hash && valid.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };

  return (
    <div className="app-container">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'logs' && <Logs />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App;