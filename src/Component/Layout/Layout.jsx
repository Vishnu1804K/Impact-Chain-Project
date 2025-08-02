import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className='LayoutContainer'>
            <NavBar />
            <main className='MainContent'>
                {children}
            </main>
        </div>
    );
};

export default Layout; 