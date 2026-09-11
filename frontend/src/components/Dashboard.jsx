import { useEffect, useState } from 'react'

<<<<<<< HEAD
function Dashboard({ setPage }) {
=======
function Dashboard() {
>>>>>>> origin/frontend
  const [totalStudents, setTotalStudents] = useState(0)
const [totalDepartments, setTotalDepartments] = useState(0)
  useEffect(() => {
  fetch("http://localhost:5000/api/students")
    .then((response) => response.json())
    .then((data) => {
  setTotalStudents(data.length)

  const departments = new Set(
    data.map((student) => student.department)
  )

  setTotalDepartments(departments.size)
})
}, [])
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
           <p>{totalStudents}</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🏫</div>
          <div>
            <h3>Departments</h3>
           <p>{totalDepartments}</p>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <div>
            <h3>Active Students</h3>
         <p>{totalStudents}</p>
          </div>
        </div>

      </div>

      <div className="quick-section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
<<<<<<< HEAD
          <button onClick={() => setPage("addStudent")}>
  Add New Student
</button>

<button onClick={() => setPage("students")}>
  View Students
</button>
=======
          <button>Add New Student</button>
          <button>View Students</button>
>>>>>>> origin/frontend
        </div>
      </div>

    </div>
  )
}

export default Dashboard