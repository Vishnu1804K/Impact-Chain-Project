import React, { useState, useEffect, useContext } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import { DarkTheme } from '../../App';
import { contributionsService } from '../../firebase/services';
import './Contribution.css';

const contributionIcons = {
  'code': <CodeIcon />,
  'donation': <MonetizationOnIcon />,
  'event': <EventIcon />,
};

const ContributionCard = ({ contribution }) => (
  <div className="ContributionCard">
    <div className="ContributionCard-icon">
      {contributionIcons[contribution.type] || <CodeIcon />}
    </div>
    <div className="ContributionCard-content">
      <h2>{contribution.title}</h2>
      <p>by {contribution.userName || 'Anonymous'}</p>
    </div>
    <div className="ContributionCard-meta">
      <div>{new Date(contribution.createdAt?.toDate()).toLocaleDateString()}</div>
    </div>
  </div>
);

const Contribution = () => {
  const { darkMode } = useContext(DarkTheme);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        // Mock data for demonstration
        const mockContributions = [
          { id: '1', type: 'code', title: 'Added dark mode feature', userName: 'Alice', createdAt: { toDate: () => new Date() } },
          { id: '2', type: 'donation', title: 'Donated $50 to Clean Water project', userName: 'Bob', createdAt: { toDate: () => new Date('2023-10-22') } },
          { id: '3', type: 'event', title: 'Organized local blockchain meetup', userName: 'Charlie', createdAt: { toDate: () => new Date('2023-10-20') } },
        ];
        // In a real scenario, you would use:
        // const fetchedContributions = await contributionsService.getContributions();
        setContributions(mockContributions);
      } catch (err) {
        setError('Failed to fetch contributions.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className='ContributionContainer'>
      <h1>Community Contributions</h1>
      <p className="subtitle">
        A log of all the amazing contributions from our community members.
      </p>
      <div className="ContributionList">
        {contributions.map(contribution => (
          <ContributionCard key={contribution.id} contribution={contribution} />
        ))}
      </div>
    </div>
  );
};

export default Contribution;