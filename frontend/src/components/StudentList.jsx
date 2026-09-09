import { useEffect, useState } from 'react'

function StudentList() {
  const [students, setStudents] = useState([])
  const [editingStudent, setEditingStudent] = useState(null)
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data)
      })
  }, [])

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this student?")

  if (!confirmDelete) {
    return
  }

  fetch(`http://localhost:5000/api/students/${id}`, {
    method: "DELETE"
  })
    .then((response) => response.json())
  .then((data) => {
  alert(data.message)

  setStudents((currentStudents) =>
    currentStudents.filter((student) => student._id !== id)
  )
})
}
 const handleUpdate = () => {
  fetch(`http://localhost:5000/api/students/${editingStudent._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editingStudent)
  })
    .then((response) => response.json())
    .then((updatedStudent) => {
      alert("Student updated successfully!")

      setStudents((currentStudents) =>
        currentStudents.map((student) =>
          student._id === updatedStudent._id
            ? updatedStudent
            : student
        )
      )

      setEditingStudent(null)
    })
}
if (editingStudent) {
  return (
    <div>
      <h2>Edit Student</h2>

     <input
  type="text"
  value={editingStudent.name}
  onChange={(e) =>
    setEditingStudent({
      ...editingStudent,
      name: e.target.value
    })
  }
/>

    <button onClick={handleUpdate}>
    Save Changes
    </button>

      <button onClick={() => setEditingStudent(null)}>
        Cancel
      </button>
    </div>
  )
}
  return (
  <div className="student-list">
    <h2>Students</h2>

    <div className="student-table-container">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.department}</td>
              <td>{student.semester}</td>
              <td>{student.address}</td>

              <td>
                <button onClick={() => setEditingStudent(student)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(student._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
}
export default StudentList