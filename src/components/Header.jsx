import { useState, useEffect } from 'react';

export default function Header({ activeTab, onTabChange }) {
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDateStr(
        now
          .toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
          .replace(/ /g, ' ')
      );
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        Power<span>Kubo</span>
      </div>

      <nav className="nav">
        <a
          href="#dashboard"
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            onTabChange('dashboard');
          }}
        >
          Dashboard
        </a>
        <a
          href="#logs"
          className={activeTab === 'logs' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            onTabChange('logs');
          }}
        >
          Logs
        </a>
        <a
          href="#settings"
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            onTabChange('settings');
          }}
        >
          Settings
        </a>
      </nav>

      <div className="datetime">
        <div className="date">{dateStr}</div>
        <div className="time">{timeStr}</div>
      </div>
    </header>
  );
}