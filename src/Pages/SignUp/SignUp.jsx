import React, { useState } from 'react';
import { TextField, Button, Container, Alert, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true);
      await signup(formData.email, formData.password, formData.username);
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
              ← Back to Home
            </Link>
            <h1 style={{ margin: 0 }}>SignUp</h1>
            <div style={{ width: '100px' }}></div>
          </div>

          {error && <Alert severity="error" style={{ marginBottom: '15px' }}>{error}</Alert>}

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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            disabled={loading}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            style={{ marginTop: '15px' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <span>Already have an account? </span>
            <Link to="/signin" style={{ color: '#007bff', textDecoration: 'none' }}>
              Sign In
            </Link>
          </div>
        </form>
        <div className="circle-quadrant">
          <div>
            <h1>New Here?</h1>
            <p>Explore our forums, chat rooms, and collaborative coding spaces.
              We believe in the power of collaboration, learning, and sharing!</p>
            <Link to="/signin" >
              <button className='signin-signup'>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
