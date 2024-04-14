import React, { useContext } from 'react';
import './About.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { DarkTheme } from '../../App';

const Profile = ({ name, role ,pic}) => {
  const darkModeData = useContext(DarkTheme);
  const containerStyle = darkModeData.darkMode
    ? {
        backgroundColor: '#333',
        color: 'white',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)', // White box shadow in dark mode
      }
    : { backgroundColor: '#fff', color: '#333' };
  const iconStyle = darkModeData.darkMode ? { color: 'white' } : { color: '#333' };

  return (
    <div style={containerStyle}>
      <img
        src={pic}
        alt=""
        style={{ borderRadius: '50%' }}
      />
      <h1>{name}</h1>
      <h4>{role}</h4>
      <div className="profile">
        <LinkedInIcon className="span" />
        <GitHubIcon className="span" />
        <InstagramIcon className="span"/>
      </div>
    </div>
  );
};

const About = () => {
  const darkModeData = useContext(DarkTheme);
  const containerStyle = darkModeData.darkMode
    ? { backgroundColor: '#333', color: 'white' }
    : { backgroundColor: '#fff', color: '#333' };

  return (
    <div className="AboutContainer" style={containerStyle}>
      <h1 style={{ color: darkModeData.darkMode ? 'white' : '#007bff' }}>
        Our Team
      </h1>
      <div className="Profiles">
        <Profile name="K. Sri Vishnu" role="FullStack Developer" pic="data:image/jpeg;base64,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"/>
        <Profile name="L. Lohith" role="FullStack Developer" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fa9detuRDaRj-bxfNPrthnaIINE9KGQa_Q&s"/>
        <Profile name="K. SatyaNarayana" role="BlockChain Developer" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBXEYAYvmn15vHHWTdcHbJPonzl7KVv5lXg&s"/>
        <Profile name="K. Pavan Sriram" role="BlockChain Developer" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53hS-8OunNfZ3cBHAqNyetD8bHsj9WhkEow&s"/>
      </div>
    </div>
  );
};

export default About;