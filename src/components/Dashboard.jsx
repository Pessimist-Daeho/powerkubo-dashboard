export default function Dashboard() {
  // ──────────────────────────────────────────────────────────────
  // Current values (placeholders) – will be replaced by backend data
  // When backend is ready: update these variables from API
  // ──────────────────────────────────────────────────────────────
  const binLevel = 80;
  const batteryLevel = 90;

  return (
    <div className="tab-content active" id="dashboard">
      {/* Section title – matches screenshot: no burger, left-aligned */}
      <div className="section-title">
        Waste Bin Level Management
      </div>

      {/* Dashboard grid – full layout match */}
      <div className="dashboard-grid">

        {/* Bin Level Card */}
        <div className="card">
          <div className="card-title">Bin Level</div>
          <div className="bin-level">
            <div
              className={`circular-progress ${binLevel < 21 ? 'low' : binLevel < 50 ? 'medium' : 'high'}`}
              style={{ '--progress': `${binLevel}%` }}
            >
              <div className="progress-content">
                <div className="percentage">{binLevel}%</div>
                <div className="label">FULL</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="card location-card">
          <div className="card-title">Location</div>
          <div className="map-placeholder">
            <div className="map-cities">
              Zamboanga City •<br />
              Sirawai • Tungawan •<br />
              Sibuco • Olutanga
            </div>
          </div>
          <small style={{ marginTop: '8px', color: 'var(--text-muted)', fontSize: '11px', display: 'block', textAlign: 'center' }}>
            Real-time GPS integration coming soon
          </small>
        </div>

        {/* Battery Health Card */}
        <div className="card">
          <div className="card-title">Battery Health</div>
          <div className="battery-container">
            <div className="battery">
              <div
                className={`battery-fill ${batteryLevel < 21 ? 'low' : batteryLevel < 50 ? 'medium' : 'high'}`}
                style={{ width: `${batteryLevel}%` }}
              />
            </div>
            <div className="battery-percentage">{batteryLevel}%</div>
          </div>
        </div>

        {/* Device Status Card */}
        <div className="card">
          <div className="card-title">Device Status</div>
          <div id="deviceStatusLine" style={{ fontSize: '18px', fontWeight: 600 }}>
            <span id="statusDot" className="status-dot online" />
            <span id="statusText">ONLINE</span>
          </div>
          <div className="status-info">
            <div><strong>Signal:</strong> Excellent</div>
            <div><strong>Temp:</strong> 32°C</div>
            <div><strong>Last Ping:</strong> 1 min ago</div>
            <div><strong>WiFi:</strong> Connected</div>
          </div>
        </div>

      </div>
    </div>
  );
}