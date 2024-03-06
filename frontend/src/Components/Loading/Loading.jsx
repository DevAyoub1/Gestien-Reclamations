
import React from 'react'
import './loading.css';
import LinearProgress from '@mui/material-next/LinearProgress';



export default function Loading() {
  return (
    <div className='loading-page'>
      <div className='logo'>
      <img src='/258541.svg'></img>
      </div>
      <LinearProgress className="load"
        color="success"
        
/>
    </div>
  )
}
