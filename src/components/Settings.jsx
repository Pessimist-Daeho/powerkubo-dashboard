export default function Settings() {
  return (
    <>
      <div className="section-title">Settings</div>
      <div className="settings-container">

        <div className="setting-item">
          <div>
            <div className="setting-label">Enable Push Notifications</div>
            <div className="setting-desc">Receive alerts on mobile/web when bin needs attention</div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider" />
          </label>
        </div>

        <div className="setting-item">
          <div>
            <div className="setting-label">Alert when bin reaches 80% full</div>
            <div className="setting-desc">Sends notification when fill level exceeds this threshold (recommended for route optimization)</div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider" />
          </label>
        </div>

        <div className="setting-item">
          <div>
            <div className="setting-label">High Temperature Alert (>40°C)</div>
            <div className="setting-desc">Notify if bin interior gets too hot (prevents odors/fire risk)</div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>

        <div className="setting-item">
          <div>
            <div className="setting-label">Send Daily Summary Report</div>
            <div className="setting-desc">Email or push summary of bin status and pickups every day</div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>

        <div className="setting-item">
          <div>
            <div className="setting-label">Enable Device Sound Alerts</div>
            <div className="setting-desc">Bin beeps locally when full or on critical events</div>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
        </div>

      </div>
    </>
  );
}