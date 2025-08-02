import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import './Home.css'
const Home = ({ children }) => {
  return (
    <div className='HomeConatiner'>
      <NavBar />
      {children}
    </div>
  )
}

export default Home
