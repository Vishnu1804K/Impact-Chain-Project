import React, { useContext } from 'react';
import './StartPage.css';
import { DarkTheme } from '../../App';
import img1 from "../../Images/Designer.png"
const StartPage = () => {
  const darkModeData = useContext(DarkTheme);

  const containerStyle = darkModeData.darkMode
    ? { backgroundColor: '#333' }
    : { backgroundColor: '#fff' };

  const textStyle = darkModeData.darkMode
    ? { color: 'white' }
    : { color: '#333' };

  const buttonStyle = darkModeData.darkMode
    ? { backgroundColor: '#ffee00', color: '#333' }
    : { backgroundColor: '#007bff', color: '#fff' };

  return (
    <div className="StartPageContainer" style={containerStyle}>
      <div className="Side1">
        <h2 style={textStyle}>ImpactChain</h2>
        <h1>Network</h1>
        <p style={textStyle}>
        ImpactChain is revolutionizing traditional philanthropy by offering innovative features to users. These include partnerships with local businesses, exclusive perks, and the introduction of an ImpactChain token, fostering transparency, inclusivity, and impactful giving, empowering users to make a tangible difference.
        </p>
        <button className='Rounder'>Get Started</button>
      </div>
      <div className="Side2">
        <div
          className="Quadrant"
        ></div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default StartPage;