
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Axios } from '../../Api/Axios';
import { useEffect, useState } from 'react';





import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Copyright from '../../CopyRight/CopyRight';


    
  
export default function Reclamation ({search}) {
    const [listReclamation,setReclamation]=useState([]);
    const [listfilter,setfilter]=useState([])
    const ListReclamation=async(numPage)=>{
        await Axios.get(`/api/reclamations?page=${numPage}`).then((res)=>setReclamation(res.data.data))
    }
    const Listfilter=async(numPage)=>{
      await Axios.get(`/api/ReclamationHome/${search}?page=${numPage}`).then((res)=>setfilter(res.data.data))
  }
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      // ListReclamation();
     ListReclamation(currentPage);
     Listfilter(currentPage)
    
    }, [currentPage,search]);
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
  };
  
  const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
  };
  
  // const listfilter = listReclamation.filter(u => {
  //   // Check if u.ville is defined before calling toUpperCase()
  //   return u.ville && u.ville.toUpperCase().startsWith(search);
  // });
  
  
  return (
    <center>
    <Box sx={{ width: '90%' }} >
      
      <Sheet
        variant="outlined"
        sx={{
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: (theme) =>
            `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 'var(--Table-firstColumnWidth)' }}>#ID</th>
              
              <th style={{ width: 200 }}>Ville</th>
              <th style={{ width: 200 }}>Description</th>

              <th style={{ width: 200 }}>Status</th>
              {/* <th style={{ width: 200 }}>Adresse</th>
              <th style={{ width: 200 }}>Telephone</th> */}
              {/* <th style={{ width: 200 }} >Actions</th> */}
              {/* <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}
              /> */}
            </tr>
          </thead>
          <tbody>
            {!search?listReclamation.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.ville}</td>
                <td>{row.description}</td>
                <td >{(row.status==="En Cours")?<p style={{backgroundColor:"red",color:"white",borderRadius:"10px",width:"100px",fontFamily:"sans-serif"}}>{row.status}</p>:<p style={{backgroundColor:"green",color:"white",borderRadius:"10px",width:"100px",fontFamily:"sans-serif"}}>{row.status}</p>}</td>
               
              </tr>)):listfilter.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.ville}</td>
                <td>{row.description}</td>
             <td >{(row.status==="En Cours")?<p style={{backgroundColor:"red",color:"white",borderRadius:"10px",width:"100px",fontFamily:"sans-serif"}}>{row.status}</p>:<p style={{backgroundColor:"green",color:"white",borderRadius:"10px",width:"100px",fontFamily:"sans-serif"}}>{row.status}</p>}</td>
                
              </tr>))}
            
          </tbody>
          
        </Table>
        <div>
        <Stack spacing={2}>
      <Pagination count={20} shape="rounded"  onChange={(e,value)=>setCurrentPage(value)}/>
      
    </Stack></div>
    
      </Sheet>
    </Box></center>
  );
}