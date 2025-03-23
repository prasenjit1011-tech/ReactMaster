import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
            <li>
              <i className="fas fa-chart-bar"></i>
              <span>Analytics</span>
            </li>
            <li>
              <i className="fas fa-users"></i>
              <span>Users</span>
            </li>
            <li>
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h1>Welcome, User!</h1>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <img src="https://via.placeholder.com/40" alt="Profile" />
              <span>John Doe</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
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
                <i className="fas fa-bell"></i>
              </div>
              <div className="stat-info">
                <h3>Notifications</h3>
                <p>12</p>
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
                <div className="activity-details">
                  <p>New user registered</p>
                  <span>2 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="activity-details">
                  <p>New report generated</p>
                  <span>15 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="activity-details">
                  <p>Task completed</p>
                  <span>1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 