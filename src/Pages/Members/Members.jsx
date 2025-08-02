import React, { useState, useEffect, useContext } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import { DarkTheme } from '../../App';
import { membersService } from '../../firebase/services';
import './Members.css';

const MemberCard = ({ member }) => {
  return (
    <div className="MemberCard">
      <div className="MemberCard-header">
        <img src={member.avatar || `https://i.pravatar.cc/150?u=${member.id}`} alt={member.name} className="MemberCard-avatar" />
        <div className="MemberCard-info">
          <h2>{member.name}</h2>
          <p>{member.role || 'Community Member'}</p>
        </div>
      </div>
      <div className="MemberCard-stats">
        <div className="MemberCard-stat">
          <div className="value">{member.contributions}</div>
          <div className="label">Contributions</div>
        </div>
        <div className="MemberCard-stat">
          <div className="value">{member.points}</div>
          <div className="label">Points</div>
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const { darkMode } = useContext(DarkTheme);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Mock data for demonstration until backend is ready
        const mockMembers = [
          { id: '1', name: 'Alice Johnson', role: 'Top Contributor', contributions: 128, points: 2500, avatar: 'https://i.pravatar.cc/150?u=alice' },
          { id: '2', name: 'Bob Williams', role: 'Blockchain Enthusiast', contributions: 92, points: 1800, avatar: 'https://i.pravatar.cc/150?u=bob' },
          { id: '3', name: 'Charlie Brown', role: 'New Member', contributions: 15, points: 300, avatar: 'https://i.pravatar.cc/150?u=charlie' },
          { id: '4', name: 'Diana Miller', role: 'Core Developer', contributions: 210, points: 4200, avatar: 'https://i.pravatar.cc/150?u=diana' },
        ];

        // In a real scenario, you would fetch from your service:
        // const fetchedMembers = await membersService.getMembers();
        setMembers(mockMembers);

      } catch (err) {
        setError('Failed to fetch members.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
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
    <div className='MembersContainer'>
      <h1>Community Members</h1>
      <p className="subtitle">
        Meet the active and engaged members of the ImpactChain community.
      </p>
      <div className="MembersList">
        {members.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
