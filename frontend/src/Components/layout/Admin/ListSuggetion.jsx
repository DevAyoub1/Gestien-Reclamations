
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Axios } from '../../Api/Axios';
import { useEffect, useState } from 'react';





import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ReclamationApi from '../../ContextApi/ReclamationApi';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import Copyright from '../../CopyRight/CopyRight';


    
  
export default function ListSuggetion () {
    const [listSuggestion,setSuggestion]=useState([])
    const ListSuggestions=async(currentPage)=>{
        await Axios.get(`/api/suggetions?page=${currentPage}`).then((res)=>setSuggestion(res.data.data))
    }
   
    
    const [currentPage, setCurrentPage] = useState(1);
    const Handledelete = async (id) => {
      confirmAlert({
        title: 'Delete',
        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await ReclamationApi.deleteSuggestion(id);
              ListSuggestions(currentPage);
            }
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
      });
    };
    useEffect(() => {
      ListSuggestions(currentPage);
      
        
    
    }, [currentPage]);
    
   
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
              
            
              <th style={{ width: 200 }}>Description</th>

              
              <th style={{ width: 200 }}>Created</th>
              
              <th style={{ width: 200 }} >Actions</th>
              {/* <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}
              /> */}
            </tr>
          </thead>
          <tbody>
            {listSuggestion.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                
                <td>{row.description}</td>
                <td>{row.created_at}</td>
                
                {/* <td>{row.adresse}</td>
                <td>{row.telephone}</td> */}
                {/* <td>{row.carbs}</td>
                <td>{row.protein}</td> */}
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                  <Link to={`/EditSuggestion/${row.id}`}>  <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button></Link>
                    <Button size="sm" variant="soft" color="danger" onClick={()=>Handledelete(row.id)}>
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
        <Stack spacing={2}>
      <Pagination count={10} shape="rounded"  onChange={(e,value)=>setCurrentPage(value)}/>
      
    </Stack></div>
      </Sheet>
    </Box><Copyright sx={{ mt: 5 }} /></center>
  );
}