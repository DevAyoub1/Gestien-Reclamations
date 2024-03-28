import React from 'react'

import SidebarAdmin from '../../Sidebar/User/SidebarHome'
import Navbar from '../../Navbar/Navbar';
import Card from '../../Cards/Card'
import Calendar from '../../vues/Calendar/Calendar'
import Reclamation from '../../vues/Reclamation/Reclamation'
import Client from '../../vues/Client/Client'
import Chart from '../../vues/Chart/Chart1/Chart1'
import Chart2 from '../../vues/Chart/Chart2/Chart2'
import SidebarHome from '../../Sidebar/User/SidebarHome';
import Login from '../../Form/Login/Login';
import Register from '../../Form/Register/Register';
export default function RegisterHome() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarHome/>
      <Navbar/>
      </div>
     
      <div className='homecontainer'>
        
        <div className='homeContent'>
          <Register/>
          {/* <div className="buttom">
            <h1>List des Reclamations</h1>
            <Reclamation className="reclamationh"/>
            <h1>List des Clients</h1>
            <Client className="clienth"/>
          </div> */}
          
        </div>
      </div>
    </div>
  )
}
