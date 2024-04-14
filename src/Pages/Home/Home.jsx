import React from 'react'
import NavBar from '../../Component/NavBar/NavBar'
import SideNavBar from '../../Component/SideNavBar/SideNavBar'
import './Home.css'
const Home = ({children}) => {
  return (
    <div className='HomeConatiner'>
        <NavBar/>
        {children}
    </div>
  )
}

export default Home
