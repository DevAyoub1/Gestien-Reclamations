import React, { useState } from 'react'
import './navbar.css'
import { SearchOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Notifications from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `0px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Navbar() {


  return (
    <div className='nav'>
        
      <div className="nav-search">
        <hr id='search'/>
        <SearchOutlined className='icn'/>
        
        <input type='search' placeholder='recherché' id='inp'/>
      </div>
      <div className="right">
      <div className='not'>
      <IconButton aria-label="notification">
      <StyledBadge badgeContent={4} color="warning">
        <Notifications />
      </StyledBadge>
    </IconButton>
      </div>
      <div className='profile'>
      <IconButton aria-label="notification">
      
        <Avatar />
      
    </IconButton>
      </div>
    
      </div>
    </div>
  )
}
