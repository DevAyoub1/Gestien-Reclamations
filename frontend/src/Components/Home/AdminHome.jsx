import React from 'react'
import './home.css';
import SidebarAdmin from '../Sidebar/Admin/SidebarAdmin'
import Navbar from '../Navbar/Navbar';
import Card from '../Cards/Card'
import Calendar from '../vues/Calendar/Calendar'
import Reclamation from '../vues/Reclamation/Reclamation'
import Client from '../vues/Client/Client'
import Chart from '../vues/Chart/Chart1/Chart1'
import Chart2 from '../vues/Chart/Chart2/Chart2'
export default function AdminHome() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarAdmin/>
      <Navbar/>
      </div>
      <div className='homecontainer'>
        
        <div className='homeContent'>
          <div className="top">
          <Card id='cardsh'/>
          <Calendar id="calendarh"/>
          
          </div>
          <div className="midle">
            <Chart2 id="chart2h"/>
            <Chart id="charth"/>
            
          </div>
          <div className="buttom">
            <h1>List des Reclamations</h1>
            <Reclamation className="reclamationh"/>
            <h1>List des Clients</h1>
            <Client className="clienth"/>
          </div>
          
        </div>
      </div>
    </div>
  )
}
