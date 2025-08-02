import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, Box, Typography } from '@mui/material';
import { DarkTheme } from '../../App';
import { projectsService } from '../../firebase/services';
import './Discover.css';

const ProjectCard = ({ project }) => (
  <div className="ProjectCard">
    <img src={project.imageUrl || 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop'} alt={project.title} className="ProjectCard-image" />
    <div className="ProjectCard-content">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
    <div className="ProjectCard-footer">
      <div className="ProjectCard-stats">
        <span><strong>{project.supporters}</strong> Supporters</span>
      </div>
      <Link to={`/project/${project.id}`} className="ProjectCard-cta">
        View Project
      </Link>
    </div>
  </div>
);

const Discover = () => {
  const { darkMode } = useContext(DarkTheme);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Mock data for demonstration
        const mockProjects = [
          { id: '1', title: 'Decentralized Education Platform', description: 'A platform to provide free, high-quality education to everyone, everywhere.', supporters: 1200, imageUrl: 'https://images.unsplash.com/photo-1491841550275-5b462bf48569?q=80&w=2670&auto=format&fit=crop' },
          { id: '2', title: 'Community-Owned Solar Grids', description: 'Empowering communities with clean, renewable energy through decentralized solar grids.', supporters: 850, imageUrl: 'https://images.unsplash.com/photo-1497435334365-650441b4324f?q=80&w=2574&auto=format&fit=crop' },
          { id: '3', title: 'Transparent Supply Chain', description: 'Ensuring fair trade and ethical sourcing by tracking products on the blockchain.', supporters: 2500, imageUrl: 'https://images.unsplash.com/photo-1616499370268-96228236c359?q=80&w=2670&auto=format&fit=crop' },
        ];
        // In a real scenario, you would use:
        // const fetchedProjects = await projectsService.getProjects();
        setProjects(mockProjects);
      } catch (err) {
        setError('Failed to fetch projects.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
    <div className='DiscoverContainer'>
      <h1>Discover Projects</h1>
      <p className="subtitle">
        Explore and support innovative projects that are making a real-world impact.
      </p>
      <div className="ProjectList">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Discover;