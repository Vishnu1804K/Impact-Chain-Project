import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DarkTheme } from '../../App';
import { useAuth } from '../../Context/AuthContext';
import "./NavBar.css";

const NavBar = () => {
  const darkModeData = useContext(DarkTheme);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      handleUserMenuClose();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const containerStyle = darkModeData.darkMode
    ? { backgroundColor: '#333', color: '#fff' }
    : { backgroundColor: '#fff', color: '#333' };

  const linkStyle = darkModeData.darkMode
    ? { color: 'inherit', textDecoration: 'none' }
    : { color: 'inherit', textDecoration: 'none' };

  return (
    <div className="NavBarContainer" style={containerStyle}>
      <h1 style={{ color: darkModeData.darkMode ? 'white' : '' }}>
        <Link to="/" style={linkStyle}>
          Impact<span style={{ color: '#007bff' }}>Chain</span>
        </Link>
      </h1>
      <ul>
        <Link to="/home" className="li" style={linkStyle}>
          <span>Home</span>
        </Link>
        <Link to="/about" className="li" style={linkStyle}>
          <span>About</span>
        </Link>
        <Link to="/discover" className="li" style={linkStyle}>
          <span>Discover</span>
        </Link>
        <Link to="/contribution" className="li" style={linkStyle}>
          <span>Contribution</span>
        </Link>
        <Link to="/members" className="li" style={linkStyle}>
          <span>Members</span>
        </Link>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
          onClick={darkModeData.handleDarkMode}
        >
          {darkModeData.darkMode ?
            <BrightnessHighIcon style={{ color: "#ffee00" }} /> :
            <DarkModeIcon style={{ color: 'grey' }} />
          }
        </button>

        <Link to="/donate" className="button Rounder" style={linkStyle}>
          Donate
        </Link>

        {currentUser ? (
          <div>
            <Button
              onClick={handleUserMenuClick}
              style={{ color: darkModeData.darkMode ? 'white' : '#333' }}
              startIcon={<AccountCircleIcon />}
            >
              {currentUser.displayName || currentUser.email}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={() => { handleUserMenuClose(); navigate('/settings'); }}>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" size="small">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="small">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;