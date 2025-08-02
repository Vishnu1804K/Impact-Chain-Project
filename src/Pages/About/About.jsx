import React, { useContext } from 'react';
import { DarkTheme } from '../../App';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './About.css';

const Profile = ({ name, role, pic }) => {
  return (
    <div className='ProfileCard'>
      <img src={pic} alt={name} className="pic" />
      <div className="name">{name}</div>
      <div className="role">{role}</div>
      <div className="social-links">
        <LinkedInIcon className="span" />
        <GitHubIcon className="span" />
        <InstagramIcon className="span" />
      </div>
    </div>
  );
};

const About = () => {
  const { darkMode } = useContext(DarkTheme);

  return (
    <div className='AboutContainer'>
      <h1>Meet Our Team</h1>
      <p className="subtitle">
        We are a passionate group of developers and innovators dedicated to building a decentralized future.
      </p>
      <div className="Profiles">
        <Profile name="K. Sri Vishnu" role="FullStack Developer" pic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop" />
        <Profile name="L. Lohith" role="FullStack Developer" pic="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" />
        <Profile name="K. SatyaNarayana" role="BlockChain Developer" pic="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop" />
        <Profile name="K. Pavan Sriram" role="BlockChain Developer" pic="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop" />
      </div>
    </div>
  );
};

export default About;