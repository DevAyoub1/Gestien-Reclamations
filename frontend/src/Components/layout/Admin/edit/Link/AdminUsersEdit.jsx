import React from 'react'




import Users from '../Users';
import SidebarAdmin from '../../../../Sidebar/Admin copy/SidebarAdmin';
export default function AdminUsersEdit() {
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarAdmin/>
      
      </div>
      <div className='homecontainer'>
        
        <div className='homeContent'>
       <Users/>
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
