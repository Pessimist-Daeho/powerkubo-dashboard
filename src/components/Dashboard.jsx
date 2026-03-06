export default function Dashboard() {
  // These are placeholders — later come from API / context
  const binLevel = 80;
  const batteryLevel = 90;

  return (
    <>
      <div className="section-title">
        Waste Bin Level Management
        <span className="menu-icon">☰</span>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-title">Bin Level</div>
          <div className="bin-level">
            <div
              className="circular-progress"
              style={{ '--progress': `${binLevel}%` }}
            >
              <div className="progress-content">
                <div className="percentage">{binLevel}%</div>
                <div className="label">FULL</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card location-card">
          <div className="card-title">Location</div>
          <div className="map-placeholder">
            <div className="map-cities">
              Zamboanga City •<br />
              Sirawai • Tungawan •<br />
              Sibuco • Olutanga
            </div>
          </div>
          <small className="coming-soon">
            Real-time GPS integration coming soon
          </small>
        </div>

        <div className="card">
          <div className="card-title">Battery Health</div>
          <div className="battery-container">
            <div className="battery">
              <div
                className="battery-fill"
                style={{ width: `${batteryLevel}%` }}
              />
            </div>
            <div className="battery-percentage">{batteryLevel}%</div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Device Status</div>
          <div className="status-line">
            <span className="status-dot" /> ONLINE
          </div>
          <div className="status-info">
            <div><strong>Signal:</strong> Excellent</div>
            <div><strong>Temp:</strong> 32°C</div>
            <div><strong>Last Ping:</strong> 1 min ago</div>
            <div><strong>WiFi:</strong> Connected</div>
          </div>
        </div>
      </div>
    </>
  );
}