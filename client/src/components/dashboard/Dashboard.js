import React, { useState } from "react";
import "./dashboard.scss";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="general-overview">
        <h2>General Overview</h2>
        <p>Some information about the application</p>
      </div>
      <div className="doctors-display">
        <div className="doctor-card">
          <img src="https://via.placeholder.com/150" alt="Doctor" />
          <div className="doctor-info">
            <h3 className="doctor-name">Dr. John Doe</h3>
            <p className="doctor-specialty">Cardiologist</p>
            <p className="doctor-contact">john.doe@hospital.com</p>
          </div>
        </div>
        <div className="doctor-card">
          <img src="https://via.placeholder.com/150" alt="Doctor" />
          <div className="doctor-info">
            <h3 className="doctor-name">Dr. Jane Smith</h3>
            <p className="doctor-specialty">Dermatologist</p>
            <p className="doctor-contact">jane.smith@hospital.com</p>
          </div>
        </div>
      </div>
      <div className="patients-list">
        <h2>Patients List</h2>
        <ul>
          <li className="patient-item">
            <div className="patient-name">John Doe</div>
            <div className="patient-status">In Progress</div>
          </li>
          <li className="patient-item">
            <div className="patient-name">Jane Smith</div>
            <div className="patient-status">Completed</div>
          </li>
          <li className="patient-item">
            <div className="patient-name">Bob Johnson</div>
            <div className="patient-status">Scheduled</div>
          </li>
        </ul>
      </div>
      <div className="consultation">
        <h2>Consultation</h2>
        <div className="consultation-calendar">
          <p>Calendar goes here</p>
        </div>
        <div className="consultation-details">
          <p>Consultation details go here</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
