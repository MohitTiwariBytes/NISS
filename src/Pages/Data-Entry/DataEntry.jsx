import React, { useState } from "react";
import { writeDataEntry } from "../../Backend/Index";
import "./DataEntry.css";

const DataEntry = () => {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    organizationName: "",
    projectType: "",
    timeIntervals: "",
    clientName: "",
    projectDescription: "",
    startDate: "",
    endDate: "",
    status: "",
    assignedTo: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addRow = () => {
    const newRowIndex = rows.length; // Get the next row index
    setRows([...rows, formData]);

    // Save the data to Firebase
    writeDataEntry(newRowIndex, formData);

    // Reset the form fields after adding
    setFormData({
      organizationName: "",
      projectType: "",
      timeIntervals: "",
      clientName: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      status: "",
      assignedTo: "",
      budget: "",
    });
  };

  return (
    <div className="data-entry-container">
      <h1>Data Entry</h1>
      <div className="form-row">
        <input
          name="organizationName"
          placeholder="Organization Name"
          value={formData.organizationName}
          onChange={handleChange}
        />
        <input
          name="projectType"
          placeholder="Project Type"
          value={formData.projectType}
          onChange={handleChange}
        />
        <input
          name="timeIntervals"
          placeholder="Time Intervals"
          value={formData.timeIntervals}
          onChange={handleChange}
        />
        <input
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <input
          name="projectDescription"
          placeholder="Project Description"
          value={formData.projectDescription}
          onChange={handleChange}
        />
        <input
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <input
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
        />
        <input
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
        />
        <input
          name="assignedTo"
          placeholder="Assigned To"
          value={formData.assignedTo}
          onChange={handleChange}
        />
        <input
          name="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
        />
        <button onClick={addRow}>Add Row</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Organization Name</th>
            <th>Project Type</th>
            <th>Time Intervals</th>
            <th>Client Name</th>
            <th>Project Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.organizationName}</td>
              <td>{row.projectType}</td>
              <td>{row.timeIntervals}</td>
              <td>{row.clientName}</td>
              <td>{row.projectDescription}</td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
              <td>{row.status}</td>
              <td>{row.assignedTo}</td>
              <td>{row.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataEntry;
