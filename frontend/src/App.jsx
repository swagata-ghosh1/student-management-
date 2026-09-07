import './App.css'
import { useState } from 'react'
import StudentList from './components/StudentList'
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
function App() {
  const [page, setPage] = useState("dashboard")
  return (
    <div>
      <nav>
        <h2>Student Management System</h2>

      <button
      className={page === "dashboard" ? "active-nav" : ""}
      onClick={() => setPage("dashboard")}
      >
      Dashboard
      </button>
      <button
      className={page === "students" ? "active-nav" : ""}
      onClick={() => setPage("students")}
      >
      Students
      </button>
       <button
        className={page === "addStudent" ? "active-nav" : ""}
        onClick={() => setPage("addStudent")}
        >
        Add Student
      </button>
        </nav>
      <main>
        
       {page === "dashboard" && <Dashboard />}

        {page === "students" && <StudentList />}

        {page === "addStudent" && <AddStudent />}
      </main>
    
      
    </div>
  )
}

export default App