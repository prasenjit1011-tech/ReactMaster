import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import PatientList from './PatientList';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h2>Dashboard</h2>
        </div>
        <nav className="menu">
          <ul>
            <li className="active">
              <Link to="/dashboard">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/patients">
                <i className="fas fa-users"></i>
                <span>Patients</span>
              </Link>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </li>
            <li>
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </li>
            <li>
              <i className="fas fa-bell"></i>
              <span>Notifications</span>
            </li>
            <li className="logout-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h1>Welcome Back!</h1>
            <p>Here's what's happening with your projects today.</p>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <img src="https://cdn-icons-png.freepik.com/256/3135/3135823.png" alt="Profile" />
              <span>John Doe</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-info">
              <h3>Total Users</h3>
              <p>1,234</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-info">
              <h3>Revenue</h3>
              <p>$45,678</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="stat-info">
              <h3>Tasks</h3>
              <p>89</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="stat-info">
              <h3>Completed</h3>
              <p>67</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="activity-content">
                <p>New user registered</p>
                <span>2 minutes ago</span>
              </div>
            </div>
            
          </div>
        </div>
        <br />
        <PatientList />
      </div>
    </div>
  );
};

export default Dashboard; 