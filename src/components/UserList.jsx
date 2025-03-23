import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import PatientList from './PatientList';
import './Dashboard.css';
import UserMenu from './UserMenu';

const UserList = ({type}) => {
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
        <UserMenu />
      </div>

      {/* Main Content */}
      <div className="main-content">
        
        <PatientList type={type} />
      </div>
    </div>
  );
};

export default UserList; 