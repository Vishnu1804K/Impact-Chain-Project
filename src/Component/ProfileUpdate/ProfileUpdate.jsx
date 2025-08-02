import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProfileUpdate = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
          <Tab label="General" />
          <Tab label="Change Password" />
          <Tab label="Info" />
          <Tab label="Social Links" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField id="username" label="UserName" variant="outlined" />
          <TextField id="email" label="Email" variant="outlined" />
          <TextField id="company" label="Company" variant="outlined" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField id="password" label="Password" variant="outlined" type="password" />
          <TextField id="confirm-password" label="Confirm Password" variant="outlined" type="password" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Info content coming soon...</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Social Links content coming soon...</Typography>
      </TabPanel>
    </Box>
  );
};

export default ProfileUpdate;
