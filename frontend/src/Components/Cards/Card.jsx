import React, { useEffect, useState } from 'react'
import './card.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import { Axios } from '../Api/Axios';

const Card = (count) => {
  const [CountClient,setCountClient]=useState()
    const Countclients=async()=>{
   await Axios.get('/api/CountClient').then((res)=>setCountClient(res.data))
    }
    const [CountReclamation,setCountReclamation]=useState()
    const Countreclamations=async()=>{
   await Axios.get('/api/CountReclamation').then((res)=>setCountReclamation(res.data))
    }
    const [CountReclamationEncours,setCountReclamationEncours]=useState()
    const CountreclamationEncours=async()=>{
     await Axios.get('/api/CountReclamationEncours').then((res)=>setCountReclamationEncours(res.data))
      }
      const [CountReclamationTraité,setCountReclamationTraité]=useState()
      const CountreclamationTraité=async()=>{
       await Axios.get('/api/CountReclamationTraité').then((res)=>setCountReclamationTraité(res.data))
        }
     useEffect(()=>{
       Countclients();
       Countreclamations()
       CountreclamationEncours()
       CountreclamationTraité()
     },[])
  return (
    <div className='cards'>
      
        <div className='cardtop'>
        <div className="card c1">
          <AssignmentTurnedInIcon className='icon icon1'/>
          <div className='card-content'>
            {CountReclamationTraité}
          </div>
          <div className='card-footer'>
            <p style={{fontSize:"20px",fontFamily:"sans-serif"}}>Reclamation Traitée</p>
          </div>
        </div>
        <div className="card c2">
          <AccessTimeIcon className='icon icon2'/>
          <div className='card-content'>
            {CountReclamationEncours}
          </div>
          <div className='card-footer'>
          <p style={{fontSize:"20px",fontFamily:"sans-serif"}}>Reclamation En Cours</p>
          </div>
        </div>
        </div>
        <div className="cardbuttom">
        <div className="card c3">
          <AssignmentIcon className='icon icon3'/>
          <div className='card-content'>
            {CountReclamation}
          </div>
          <div className='card-footer'>
          <p style={{fontSize:"20px",fontFamily:"sans-serif"}}>Reclamations</p>
          </div>
        </div>
        <div className="card c4">
          <PeopleAltSharpIcon className='icon icon4'/>
          <div className='card-content'>
            {CountClient}
          </div>
          <div className='card-footer'>
          <p style={{fontSize:"20px",fontFamily:"sans-serif"}}>Users</p>
          </div>
        </div>
        </div>
     
      
    </div>
  )
}

export default Card
