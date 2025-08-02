import React, { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

// Firebase Auth Provider
import { AuthProvider } from './Context/AuthContext';

// Page components
import StartPage from './Pages/StartPage/StartPage';
import About from './Pages/About/About';
import Discover from './Pages/Discover/Discover';
import Donate from './Pages/Donate/Donate';
import Contribution from './Pages/Contribution/Contribution';
import Members from './Pages/Members/Members';
import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

// Layout and shared components
import Layout from './Component/Layout/Layout';
import EmptyPage from './Component/EmptyPage/EmptyPage';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';

const DarkTheme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add a side effect to update the body class
  React.useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <AuthProvider>
        <DarkTheme.Provider value={{ darkMode, handleDarkMode }}>
          <Routes>
            {/* Home route - shows StartPage */}
            <Route path="/" element={<Layout><StartPage /></Layout>} />
            <Route path="/home" element={<Layout><StartPage /></Layout>} />

            {/* Main navigation routes */}
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/discover" element={<Layout><Discover /></Layout>} />
            <Route path="/contribution" element={<Layout><Contribution /></Layout>} />
            <Route path="/donate" element={<Layout><Donate /></Layout>} />

            {/* Protected user management routes */}
            <Route path="/members" element={
              <ProtectedRoute>
                <Layout><Members /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Layout><Settings /></Layout>
              </ProtectedRoute>
            } />

            {/* Authentication routes - no layout (standalone pages) */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<EmptyPage />} />
          </Routes>
        </DarkTheme.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
export { DarkTheme };