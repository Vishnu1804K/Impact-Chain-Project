import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkTheme } from '../../App';
import './StartPage.css';

const StartPage = () => {
  const { darkMode } = useContext(DarkTheme);

  return (
    <div className='StartPageContainer'>
      <div className="start-page-content">
        <h1>
          Empower Change with <span>ImpactChain</span>
        </h1>
        <p>
          A decentralized platform connecting developers, innovators, and communities to build a better future on the blockchain.
        </p>
        <Link to="/discover" className="cta-button">
          Discover Projects
        </Link>
      </div>
      <div className="start-page-image">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2574&auto=format&fit=crop"
          alt="Blockchain network"
        />
      </div>
    </div>
  );
};

export default StartPage;