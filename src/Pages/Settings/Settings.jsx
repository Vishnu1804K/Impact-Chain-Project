import React, { useContext } from 'react'
import ProfileUpdate from '../../Component/ProfileUpdate/ProfileUpdate';
import { DarkTheme } from '../../App';
import './Settings.css'
const Settings = () => {
  const darkModeData = useContext(DarkTheme);
  const containerStyle = darkModeData.darkMode ? { color: 'white', backgroundColor: '#333' } : {};
  return (
    <div className='SettingsContainer' style={containerStyle}>
      <h1>Account Settings</h1>
      <div className='SettingsCard'>
        <ProfileUpdate />
      </div>
    </div>
  )
}

export default Settings;
