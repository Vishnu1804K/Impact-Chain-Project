import React, { useContext, useState, useEffect } from 'react';
import { TextField, Button, Alert, CircularProgress, Typography, Card, CardContent, Grid } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DarkTheme } from '../../App';
import { useAuth } from '../../Context/AuthContext';
import { donationsService } from '../../firebase/services';
import './Donate.css';

const Donate = () => {
  const darkModeData = useContext(DarkTheme);
  const { currentUser } = useAuth();
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [recentDonations, setRecentDonations] = useState([]);

  const containerStyle = darkModeData.darkMode ? { color: 'white', backgroundColor: '#333' } : {};
  const textFieldStyle = darkModeData.darkMode ? { color: 'white' } : {};
  const inputBaseStyle = darkModeData.darkMode ? { color: 'white' } : {};

  useEffect(() => {
    loadRecentDonations();
  }, []);

  const loadRecentDonations = async () => {
    try {
      const donations = await donationsService.getDonations();
      setRecentDonations(donations.slice(0, 5)); // Show last 5 donations
    } catch (error) {
      console.error('Error loading donations:', error);
    }
  };

  const handleWalletConnect = () => {
    if (!currentUser) {
      setError('Please sign in to connect your wallet');
      return;
    }
    // Simulate wallet connection
    setSuccess('Wallet connected successfully! (Demo Mode)');
    setError('');
  };

  const handleDonate = async () => {
    if (!currentUser) {
      setError('Please sign in to make a donation');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid donation amount');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const donationData = {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        userName: currentUser.displayName || 'Anonymous',
        amount: parseFloat(amount),
        message: message || 'Thank you for supporting ImpactChain!',
        currency: 'USD', // You can make this dynamic
        type: 'general_donation'
      };

      await donationsService.addDonation(donationData);
      setSuccess(`Thank you for your $${amount} donation! Your contribution makes a difference.`);
      setAmount('');
      setMessage('');
      loadRecentDonations(); // Refresh the donations list
    } catch (error) {
      setError('Failed to process donation. Please try again.');
      console.error('Donation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='DonateContainer' style={containerStyle}>
      <div className="firsthalf">
        <h1>How Donating Works</h1>
        <p>
          Thank you for deciding to donate to our cause. Your contributions help us build a better blockchain ecosystem
          for developers and communities worldwide. Every donation, no matter the size, makes a real impact.
        </p>

        {(success || error) && (
          <div style={{ margin: '20px 0' }}>
            {success && <Alert severity="success">{success}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
          </div>
        )}

        <form className='formDonate' onSubmit={(e) => e.preventDefault()}>
          <Button
            variant="contained"
            startIcon={<AccountBalanceWalletIcon />}
            onClick={handleWalletConnect}
            disabled={loading}
            style={{ marginBottom: '15px' }}
          >
            {currentUser ? 'Connect Wallet (Demo)' : 'Sign In to Connect Wallet'}
          </Button>

          <TextField
            label="Donation Amount (USD)"
            variant="outlined"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={textFieldStyle}
            InputProps={{ style: inputBaseStyle }}
            disabled={loading}
            fullWidth
            margin="normal"
            placeholder="Enter amount in USD"
          />

          <TextField
            label="Message (Optional)"
            variant="outlined"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textFieldStyle}
            InputProps={{ style: inputBaseStyle }}
            disabled={loading}
            fullWidth
            margin="normal"
            multiline
            rows={3}
            placeholder="Leave a message with your donation"
          />

          <Button
            variant="outlined"
            endIcon={loading ? <CircularProgress size={20} /> : <AttachMoneyIcon />}
            onClick={handleDonate}
            disabled={loading || !currentUser}
            fullWidth
            style={{ marginTop: '15px' }}
          >
            {loading ? 'Processing...' : 'Donate Now'}
          </Button>

          {!currentUser && (
            <Typography variant="body2" style={{ textAlign: 'center', marginTop: '10px', opacity: 0.7 }}>
              Please sign in to make a donation
            </Typography>
          )}
        </form>

        {/* Recent Donations Section */}
        {recentDonations.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <Typography variant="h6" gutterBottom>
              Recent Donations
            </Typography>
            <Grid container spacing={2}>
              {recentDonations.map((donation) => (
                <Grid item xs={12} key={donation.id}>
                  <div className="donation-card">
                    <Typography variant="body2">
                      <strong>{donation.userName}</strong> donated <strong>${donation.amount}</strong>
                    </Typography>
                    {donation.message && (
                      <Typography variant="body2" style={{ fontStyle: 'italic', marginTop: '5px', opacity: 0.8 }}>
                        "{donation.message}"
                      </Typography>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>

      <div className="secondhalf">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop"
          alt="Hands holding a heart, representing donation and charity"
        />
      </div>
    </div>
  );
};

export default Donate;