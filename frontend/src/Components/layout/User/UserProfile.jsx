import React from 'react'


import SidebarGuest from '../../Sidebar/Guest/SidebarGuest';
import { UserContext } from '../../ContextApi/ContexteApi';
import BioCard from '../../Cards/Carduser';
import Copyright from '../../CopyRight/CopyRight';
export default function UserProfile() {
  
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarGuest/>
      
      </div>
      <div className='homecontainer'>
        
        <div className='homeContent'>
         
        <BioCard />
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
