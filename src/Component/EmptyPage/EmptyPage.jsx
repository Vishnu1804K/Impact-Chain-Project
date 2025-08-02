import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import './EmptyPage.css';

const EmptyPage = () => {
  return (
    <Container className="empty-page-container">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        sx={{ py: 4 }}
      >
        <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#007bff', mb: 2 }}>
          404
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Oops! Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          Let's get you back on track!
        </Typography>

        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              size="large"
              sx={{ minWidth: '150px' }}
            >
              Go Home
            </Button>
          </Link>

          <Link to="/discover" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              startIcon={<SearchIcon />}
              size="large"
              sx={{ minWidth: '150px' }}
            >
              Discover
            </Button>
          </Link>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Popular pages:
          </Typography>
          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center" sx={{ mt: 1 }}>
            <Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link>
            <span>•</span>
            <Link to="/members" style={{ textDecoration: 'none', color: '#007bff' }}>Members</Link>
            <span>•</span>
            <Link to="/contribution" style={{ textDecoration: 'none', color: '#007bff' }}>Contribution</Link>
            <span>•</span>
            <Link to="/donate" style={{ textDecoration: 'none', color: '#007bff' }}>Donate</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default EmptyPage;
