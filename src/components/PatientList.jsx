import React, { useState, useEffect } from 'react';
import './PatientList.css';

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }
      const data = await response.json();
      setPatients(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || patient.status?.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="patient-list-container">
        <div className="loading-state">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patient-list-container">
        <div className="error-state">
          <i className="fas fa-exclamation-circle"></i>
          <p>Error: {error}</p>
          <button onClick={fetchPatients} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-list-container">
      {/* Header Section */}
      <div className="patient-list-header">
        <div className="header-left">
          <h2>Patient List</h2>
          <p>Manage and view all patient records</p>
        </div>
        <div className="header-right">
          <button className="add-patient-btn">
            <i className="fas fa-plus"></i> Add New Patient
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="status-filter">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Patient Table */}
      <div className="patient-table-container">
        {filteredPatients.length === 0 ? (
          <div className="no-data-state">
            <i className="fas fa-users"></i>
            <p>No patients found</p>
          </div>
        ) : (
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Contact Info</th>
                <th>Status</th>
                <th>Last Visit</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map(patient => (
                <tr key={patient.id}>
                  <td>
                    <div className="patient-name">
                      <div className="patient-avatar">
                        {patient.firstName?.[0]}{patient.lastName?.[0]}
                      </div>
                      <div>
                        <div className="patient-full-name">
                          {patient.firstName} {patient.lastName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-info">
                      <div className="email">{patient.email}</div>
                      <div className="phone">{patient.phone}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${patient.status?.toLowerCase() || 'pending'}`}>
                      {patient.status || 'Pending'}
                    </span>
                  </td>
                  <td>{patient.lastVisit || 'N/A'}</td>
                  <td>{patient.age || 'N/A'}</td>
                  <td>{patient.gender || 'N/A'}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view" title="View Details">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="action-btn edit" title="Edit Patient">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="action-btn delete" title="Delete Patient">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientList; 