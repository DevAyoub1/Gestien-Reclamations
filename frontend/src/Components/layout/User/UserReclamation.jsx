import React from 'react'


import SidebarGuest from '../../Sidebar/Guest/SidebarGuest';
import Parametre from '../../vues/Parametre/Parametre';
import Reclamation from '../../vues/Reclamation/Reclamation';
import UserReclamations from './user/UserReclamation';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import Copyright from '../../CopyRight/CopyRight';
export default function UserReclamation() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarGuest/>
      
      </div>
      <div className='homecontainer' >
      <Link to="/AddReclamation">  <Button style={{marginBottom:"10px",marginLeft:"72px"}}>Nouvelle Reclamation</Button></Link>
        <div className='homeContent'>
        <UserReclamations/>
          {/* <div className="top">
          <Card id='cardsh'/>
          <Calendar id="calendarh"/>
          
          </div>
          <div className="midle">
            <Chart2 id="chart2h"/>
            <Chart id="charth"/>
            
          </div> */}
          {/* <div className="buttom">
            <h1>List des Reclamations</h1>
            <Reclamation className="reclamationh"/>
            <h1>List des Clients</h1>
            <Client className="clienth"/>
          </div> */}
          
        </div>
      </div>
      <Copyright sx={{ mt: 5 }} />
    </div>
  )
}
