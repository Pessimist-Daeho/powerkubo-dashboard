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
    <>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main>
        <div className={`tab-content ${activeTab === 'dashboard' ? 'active' : ''}`} id="dashboard">
          <Dashboard />
        </div>

        <div className={`tab-content ${activeTab === 'logs' ? 'active' : ''}`} id="logs">
          <Logs />
        </div>

        <div className={`tab-content ${activeTab === 'settings' ? 'active' : ''}`} id="settings">
          <Settings />
        </div>
      </main>
    </>
  );
}

export default App;