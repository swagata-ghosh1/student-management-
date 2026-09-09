import { useState } from 'react'
function AddStudent() {
  const [name, setName] = useState("")
  const [rollNumber, setRollNumber] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")  
  const [department, setDepartment] = useState("")
  const [semester, setSemester] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = async (e) =>  {
  e.preventDefault()
  if (name === "") {
  alert("Please enter student name")
  return
  }
  if (rollNumber === "") {
  alert("Please enter roll number")
  return
  }
  if (email === "") {
  alert("Please enter email")
  return
  }
  if (phone === "") {
  alert("Please enter phone number")
  return
  }
  if (department === "") {
  alert("Please enter department")
  return
  }
  if (semester === "") {
  alert("Please enter semester")
  return
  }
  if (address === "") {
  alert("Please enter address")
  return
  }

const response = await fetch("http://localhost:5000/api/students", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    rollNumber,
    email,
    phone,
    department,
    semester,
    address
  })
})
if (!response.ok) {
  alert("Failed to add student")
  return
}

alert("Student added successfully!")

  console.log({
    name,
    rollNumber,
    email,
    phone,
    department,
    semester,
    address
  })
  console.log("ADDRESS:", address)
  setName("")
  setRollNumber("")
  setPhone("")
  setDepartment("")
  setSemester("")
  setAddress("")

}
  return (
  <div className="form-container">
    <h2>Add Student</h2>

    <form onSubmit={handleSubmit}>
      
      <div className="form-group">
  <label>Name</label>

    <input
     type="text"
      placeholder="Enter student name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

     <div className="form-group">
  <label>Roll Number</label>

    <input
      type="text"
      placeholder="Enter roll number"
      value={rollNumber}
      onChange={(e) => setRollNumber(e.target.value)}
      />
    </div>

     <div className="form-group">
  <label>Email</label>

    <input
      type="email"
      placeholder="Enter email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>

     <div className="form-group">
    <label>Phone</label>

    <input
      type="text"
      placeholder="Enter phone number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />
    </div>

     <div className="form-group">
  <label>Department</label>

    <input
      type="text"
      placeholder="Enter department"
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      />
    </div>

    <div className="form-group">
  <label>Semester</label>

   <input
    type="text"
     placeholder="Enter semester"
      value={semester}
      onChange={(e) => setSemester(e.target.value)}
    />
    </div>

    <div className="form-group">
    <label>Address</label>
      <textarea
       placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>
      </div>
    <button type="submit">Add Student</button>
       </form>
     </div>

  )
}

export default AddStudent