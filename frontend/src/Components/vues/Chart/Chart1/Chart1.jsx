
import { PieChart } from '@mui/x-charts/PieChart';
import './chart1.css'
import { useEffect, useState } from 'react';
import { Axios } from '../../../Api/Axios';
export default function BasicPie() {
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
    <div className='chart'>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: `${CountReclamationEncours}`, label:"Reclamation En cours"  },
            { id: 1, value: `${CountReclamationTraité}`, label:"Reclamation Traitée"  },
            
          ],
        },
      ]}
      width={550}
      height={200}
    />
    </div>
  );
}