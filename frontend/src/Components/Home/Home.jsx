import React from 'react'
import './home.css';
import SidebarAdmin from '../Sidebar/Admin/SidebarAdmin'
import Navbar from '../Navbar/Navbar';

export default function Home() {
  return (
    <div className='home'>
      <SidebarAdmin/>
      <div className='homecontainer'>
        
        <div className='homeContent'>
          
        </div>
      </div>
    </div>
  )
}
