import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './SignUp.css'; // Import your CSS file

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can send the formData to your backend or perform any necessary actions
  };

  return (
    <Container className="signup-container">
      <div className="circle-quadrant">
        <div>
        <h1>New Here?</h1>
        <p>Explore our forums, chat rooms, and collaborative coding spaces.
          We believe in the power of collaboration, learning, and sharing!</p>
        <button className='signin-signup'>SignIn</button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 style={{marginLeft:'35%'}}>SignUp</h1>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
