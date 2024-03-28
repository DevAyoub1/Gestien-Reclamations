import React, { useState } from 'react'

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
import { Search, SearchOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';

export default function ReclamationHome() {
  const  [search,setSearch]=useState()
  return (
    <div className='home'>
      <div className="navigation">
      <SidebarHome/>
      <Navbar/>
      </div>
     
      <div className='homecontainer'>
    <div style={{textAlign:"center",marginBottom:"10px"}}>  <TextField type="search" style={{width:"400px"}} onChange={(e)=>setSearch(e.target.value)}  label="Search"/></div>
        <div className='homeContent'>
          <Reclamation search={search}/>
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
