import React from 'react'


import SidebarGuest from '../../Sidebar/Guest/SidebarGuest';
import Parametre from '../../vues/Parametre/Parametre';
import SidebarAdmin from '../../Sidebar/Admin copy/SidebarAdmin';
import ListSuggetion from './ListSuggetion';
export default function AdminSurggestion() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarAdmin/>
      
      </div>
      <div className='homecontainer'>
        
        <div className='homeContent'>
        <ListSuggetion/>
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
    </div>
  )
}
