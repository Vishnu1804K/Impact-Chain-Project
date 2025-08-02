import React, { useState } from 'react';
import { TextField, Button, Container, Alert, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      setLoading(true);
      await signin(formData.email, formData.password);
      navigate('/');
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <div className="circle-quadrant">
          <div>
            <h1>Welcome Back!</h1>
            <p>Ready to continue your journey with ImpactChain?
              Connect with fellow developers and make a positive impact together!</p>
            <Link to="/signup">
              <button className='signin-signup'>Sign Up</button>
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
              ← Back to Home
            </Link>
            <h1 style={{ margin: 0 }}>SignIn</h1>
            <div style={{ width: '100px' }}></div>
          </div>

          {error && <Alert severity="error" style={{ marginBottom: '15px' }}>{error}</Alert>}

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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            style={{ marginTop: '15px' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <span>Don't have an account? </span>
            <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
