import React, { useState } from "react";
import "./PatientSignUpForm.css";

function PatientSignUpForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Age:", age);
    console.log("Contact Number:", contactNumber);
  };

  return (
  
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sign Up Form for Patients</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PatientSignUpForm;
