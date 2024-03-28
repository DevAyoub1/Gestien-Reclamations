import React from 'react'


import SidebarGuest from '../../Sidebar/Guest/SidebarGuest';
import Parametre from '../../vues/Parametre/Parametre';
import UserSuggestions from './user/UserSuggestion';
import Button from '@mui/joy/Button';
import UserObservations from './user/UserObservations';
import { Link } from 'react-router-dom';
import AddObservation from './user/Actions/AddObservation';
import Copyright from '../../CopyRight/CopyRight';


export default function UserObservationAdd() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarGuest/>
      
      </div>
      
      <div className='homecontainer' style={{marginBottom:"420px"}}>
        
        <div className='homeContent'>
        <AddObservation/>
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
