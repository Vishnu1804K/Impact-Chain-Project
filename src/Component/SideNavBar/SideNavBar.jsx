import React from 'react';
import { ListItemIcon } from '@mui/material';
import MembersIcon from '@mui/icons-material/Group';
import ClubsIcon from '@mui/icons-material/SportsKabaddi';
import LibraryIcon from '@mui/icons-material/MenuBook';
import PeerChatIcon from '@mui/icons-material/Forum';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import './SideNavBar.css';
import NavBar from '../NavBar/NavBar';

const SideNavBar = () => {
  return (
    <div className='SideNavBarContainer'>
      <ul>
        <li>
          <ListItemIcon><MembersIcon /></ListItemIcon>
          Members
        </li>
        <li>
          <ListItemIcon><ClubsIcon /></ListItemIcon>
          Clubs
        </li>
        <li>
          <ListItemIcon><LibraryIcon /></ListItemIcon>
          Library
        </li>
        <li>
          <ListItemIcon><PeerChatIcon /></ListItemIcon>
          PeerChat
        </li>
        <li>
          <ListItemIcon><ProfileIcon /></ListItemIcon>
          Profile
        </li>
        <li>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          Settings
        </li>
        <li className='Red'>
          <ListItemIcon><LogoutIcon style={{color: 'rgb(216, 16, 16)'}}/></ListItemIcon>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
