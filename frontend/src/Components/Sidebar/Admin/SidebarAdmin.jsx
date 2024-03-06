import React, { useState } from 'react'
import './sidebar.css'

import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';



export default function SidebarAdmin() {
  
  return (
    <div className='side' id='side' >
      <div className='logo'>
        <Link to={'/'}><img id="lg" src='/258541.svg'></img></Link>
      </div>
      <hr></hr>
      <div className='side-list'>
        
          
            <Link to={"/"}><a><i><SignalCellularAltSharpIcon className='icon' /><span>Dashboard</span></i></a></Link>
            <Link to={'/client'}><a><PeopleAltSharpIcon className='icon'/><span>Client</span></a></Link>
            <Link to={"/reclamation"}><a><AssignmentIcon className='icon'/><span>Reclamation</span></a></Link>
            <Link to={"/parametre/:id"}><a><SettingsIcon className='icon'/><span>Parametres</span></a></Link>
            
            <div className='buttom'><hr/>
           <Link to={"/login"}><a><LoginIcon className='icon'/><span>Login</span></a></Link>
            <Link to={"/login"}><a><PersonAddIcon className='icon'/><span>Register</span></a></Link>
            </div>
        
      </div>
      
      
    </div>
  )
}
