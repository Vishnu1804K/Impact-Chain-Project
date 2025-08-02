import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    // Redirect to signin if not authenticated
    if (!currentUser) {
        return <Navigate to="/signin" replace />;
    }

    // Render the protected component if authenticated
    return children;
};

export default ProtectedRoute; 