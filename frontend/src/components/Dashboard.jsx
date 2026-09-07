function Dashboard() {
  return (
    <div className="dashboard">

      <div className="welcome-section">
        <div>
          <h1>Welcome, Admin </h1>
          <p>Manage your students and their information easily.</p>
        </div>

        <div className="dashboard-icon">
          🎓
        </div>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <div className="card-icon">👨‍🎓</div>
          <div>
            <h3>Total Students</h3>
            <p>0</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🏫</div>
          <div>
            <h3>Departments</h3>
            <p>0</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <div>
            <h3>Active Students</h3>
            <p>0</p>
          </div>
        </div>

      </div>

      <div className="quick-section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <button>Add New Student</button>
          <button>View Students</button>
        </div>
      </div>

    </div>
  )
}

export default Dashboard