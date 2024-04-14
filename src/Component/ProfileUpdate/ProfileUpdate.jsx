import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import TextField from '@mui/material/TextField';

const ProfileUpdate = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList value={value} onChange={handleChange}>
            <Tab label="General" value="1" />
            <Tab label="Change Password" value="2" />
            <Tab label="Info" value="3" />
            <Tab label="Social Links" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TextField id="outlined-basic" label="UserName" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Company" variant="outlined" />
        </TabPanel>
        <TabPanel value="2">
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="Confrim Password" variant="outlined" />
        </TabPanel>
        <TabPanel value="3">
          
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProfileUpdate;
