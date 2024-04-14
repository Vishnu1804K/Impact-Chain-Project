import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkTheme } from '../../App';
import "./NavBar.css";

const NavBar = () => {
  const darkModeData = useContext(DarkTheme);

  const containerStyle = darkModeData.darkMode
    ? { backgroundColor: '#333', color: '#fff' }
    : { backgroundColor: '#fff', color: '#333' };

  const linkStyle = darkModeData.darkMode
    ? { color: 'inherit', ':hover': { color: '#ffee00' } }
    : { color: 'inherit', ':hover': { color: '#007bff' } };

  const buttonStyle = darkModeData.darkMode
    ? { backgroundColor: '#ffee00', color: '#333' }
    : { backgroundColor: '#007bff', color: '#fff' };

  return (
    <div className="NavBarContainer" style={containerStyle}>
     <h1 style={{ color: darkModeData.darkMode ? 'white' : '' }}>
  Impact<span style={{ color: darkModeData.darkMode ? '#007bff' : '#007bff' }}>Chain</span>
</h1>
      <ul>
        <Link to="/StartPage" className="li" style={linkStyle}>
         <span>Home</span> 
        </Link>
        <Link to="/About" className="li" style={linkStyle}>
        <span> About</span> 
        </Link>
        <Link to="/Discover" className="li" style={linkStyle}>
          <span> Discover</span> 
        </Link>
        <Link to="/Contribution" className="li" style={linkStyle}>
          <span> Contribution</span> 
        </Link>
        <Link to="/StartPage" className="li" style={linkStyle}>
          <span> Impact</span> 
        </Link>
      </ul>
      <div>
        <button
          style={{ color: "#ffee00", backgroundColor: 'transparent' ,position:'absolute',right:'130px',marginTop:'-12px'}}
          onClick={darkModeData.handleDarkMode}
        >
          {darkModeData.darkMode ? <BrightnessHighIcon /> : <DarkModeIcon style={{color:'grey'}}/>}
        </button>
        <Link to="/Donate" className="button Rounder" >Donate</Link>
      </div>
    </div>
  );
}

export default NavBar;