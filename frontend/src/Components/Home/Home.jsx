import React, { useEffect, useState } from 'react'
import './home.css';
import SidebarAdmin from '../Sidebar/User/SidebarHome'
import Navbar from '../Navbar/Navbar';
import Card from '../Cards/Card'
import Calendar from '../vues/Calendar/Calendar'
import Reclamation from '../vues/Reclamation/Reclamation'
import Client from '../vues/Client/Client'
import Chart from '../vues/Chart/Chart1/Chart1'
import Chart2 from '../vues/Chart/Chart2/Chart2'
import SidebarHome from '../Sidebar/User/SidebarHome';
import { Axios } from '../Api/Axios';
import Copyright from '../CopyRight/CopyRight';
export default function Home() {
  
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
    <div className='home'>
      <div className="navigation">
      <SidebarHome/>
     
      </div>
     
      <div className='homecontainer'>
        
        <div className='homeContent'>
          <div className="top">
          <Card id='cardsh' count="moujniba"/>
          <Calendar id="calendarh"/>
          
          </div>
          <div className="midle">
            <Chart2 id="chart2h" />
            <Chart id="charth" />
            
          </div>
          {/* <div className="buttom">
            <h1>List des Reclamations</h1>
            <Reclamation className="reclamationh"/>
            <h1>List des Clients</h1>
            <Client className="clienth"/>
          </div> */}
          
        </div>
      </div><Copyright sx={{ mt: 5 }} />
    </div>
  )
}
