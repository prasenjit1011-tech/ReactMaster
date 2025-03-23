import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import PatientList from './PatientList';
import './Dashboard.css';
import UserMenu from './UserMenu';
import HealthReportFrm from './HealthReportFrm';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const renderMenuItems = () => {
    if (!user) return null;


    console.log('>>>>>>',user)

    const commonMenuItems = [
      {
        icon: 'fa-home',
        label: 'Home',
        path: '/dashboard',
        active: true
      },
      {
        icon: 'fa-bell',
        label: 'Notifications',
        path: '#'
      }
    ];

    const patientMenuItems = [
      {
        icon: 'fa-calendar-check',
        label: 'Appointments',
        path: '#'
      },
      {
        icon: 'fa-file-medical',
        label: 'Medical Records',
        path: '#'
      },
      {
        icon: 'fa-pills',
        label: 'Prescriptions',
        path: '#'
      }
    ];

    const providerMenuItems = [
      {
        icon: 'fa-users',
        label: 'Patients',
        path: '/patients'
      },
      {
        icon: 'fa-calendar-plus',
        label: 'Schedule',
        path: '#'
      },
      {
        icon: 'fa-file-medical-alt',
        label: 'Patient Records',
        path: '#'
      }
    ];

    const adminMenuItems = [
      {
        icon: 'fa-users',
        label: 'Patients',
        path: '/patients'
      },
      {
        icon: 'fa-user-md',
        label: 'Providers',
        path: '/provider'
      },
      {
        icon: 'fa-cog',
        label: 'Settings',
        path: '#'
      }
    ];

    let menuItems = [...commonMenuItems];

    switch (user.user.type) {
      case 'patient':
        menuItems = [...menuItems, ...patientMenuItems];
        break;
      case 'provider':
        menuItems = [...menuItems, ...providerMenuItems];
        break;
      case 'admin':
        menuItems = [...menuItems, ...adminMenuItems];
        break;
      default:
        break;
    }

    menuItems.push({
      icon: 'fa-sign-out-alt',
      label: 'Logout',
      path: '#',
      className: 'logout-item',
      onClick: handleLogout
    });

    return menuItems.map((item, index) => (
      <li key={index} className={item.className || ''}>
        {item.onClick ? (
          <a onClick={item.onClick} style={{ cursor: 'pointer' }}>
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </a>
        ) : (
          <Link to={item.path}>
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </Link>
        )}
      </li>
    ));
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
            {renderMenuItems()}
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

        <HealthReportFrm />

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
      </div>
    </div>
  );
};

export default Dashboard; 