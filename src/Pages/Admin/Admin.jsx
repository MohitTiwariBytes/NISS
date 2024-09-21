import React, { useEffect, useState } from "react";
import { fetchProjects, updateProjectStatus } from "../../Backend/Index.js"; // Import the backend functions
import "./Admin.css";
import * as XLSX from "xlsx"; // Import XLSX for Excel export

const AdminPanel = () => {
  const [projects, setProjects] = useState({});
  const [selectedStatus, setSelectedStatus] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To manage password authentication
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch all projects when the component mounts
    if (isAuthenticated) {
      fetchProjects((data) => {
        setProjects(data || {}); // Handle null data gracefully
      });
    }
  }, [isAuthenticated]);

  const handleStatusChange = (projectId, status) => {
    updateProjectStatus(projectId, status);
    setSelectedStatus({ ...selectedStatus, [projectId]: status });
  };

  // Function to download project data as Excel
  const downloadAsExcel = () => {
    const formattedProjects = Object.keys(projects).map((projectId) => ({
      Name: projects[projectId].name,
      Email: projects[projectId].email,
      Services: projects[projectId].services,
      Budget: projects[projectId].budget,
      Status: projects[projectId].status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedProjects);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Projects");

    // Generate and download Excel file
    XLSX.writeFile(workbook, "ProjectsData.xlsx");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "niss123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h1>Admin Panel Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            className="login-input"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      <h1>Admin Panel</h1>

      {/* Download as Excel Button */}
      <button className="download-button" onClick={downloadAsExcel}>
        Download as Excel
      </button>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Email</th>
            <th>Services</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(projects).map((projectId) => {
            const project = projects[projectId];
            return (
              <tr key={projectId}>
                <td>{project.name}</td>
                <td>
                  <a href={`mailto:${project.email}`}>{project.email}</a>
                </td>
                <td>{project.services}</td>
                <td>{project.budget}</td>
                <td>{project.status}</td>
                <td>
                  <select
                    value={selectedStatus[projectId] || project.status}
                    onChange={(e) =>
                      handleStatusChange(projectId, e.target.value)
                    }
                  >
                    <option value="Working">Working</option>
                    <option value="Completed">Completed</option>
                    <option value="Waiting Confirmation">
                      Waiting Confirmation
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
