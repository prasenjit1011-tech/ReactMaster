import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import PatientList from './PatientList';
import './Dashboard.css';

const UserMenu = ({type}) => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    
        <nav className="menu">
          <ul>
            <li className={ location.pathname == '/dashboard' ? "active" : ""}>
              <Link to="/dashboard">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className={ location.pathname == '/patients' ? "active" : ""}>
              <Link to="/patients">
                <i className="fas fa-users"></i>
                <span>Patients</span>
              </Link>
            </li>
            <li className={ location.pathname == '/provider' ? "active" : ""}>
              <Link to="/provider">
                <i className="fas fa-chart-bar"></i>
                <span>Provider</span>
              </Link>
            </li>
            <li className="logout-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
  );
};

export default UserMenu; 