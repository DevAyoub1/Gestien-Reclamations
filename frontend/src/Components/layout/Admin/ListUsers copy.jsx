
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Axios } from '../../Api/Axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Pagination, Stack } from '@mui/material';
import Copyright from '../../CopyRight/CopyRight';





export default function ListUsers1 () {
    const [listUsers,setUsers]=useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const ListUsers=async(currentPage)=>{
        await Axios.get('/api/clients?page='+currentPage).then((res)=>setUsers(res.data.data))
    }
    const Handledelete = async (id) => {
      confirmAlert({
        title: 'Delete',
        message: 'Are you sure you want to delete this item?',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              await Axios.delete(`/api/clients/${id}`);
              ListUsers(currentPage);
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
      ListUsers(currentPage);
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
              
              <th style={{ width: 200 }}>Nom</th>
              <th style={{ width: 200 }}>Prenom</th>

              <th style={{ width: 200 }}>Email</th>
              <th style={{ width: 200 }}>Adresse</th>
              <th style={{ width: 200 }}>Telephone</th>
              {/* <th style={{ width: 200 }} >Actions</th> */}
              {/* <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)' }}
              /> */}
            </tr>
          </thead>
          <tbody>
            {listUsers.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.nom}</td>
                <td>{row.prenom}</td>
                <td>{row.email}</td>
                <td>{row.adresse}</td>
                <td>{row.telephone}</td>
                {/* <td>{row.carbs}</td>
                <td>{row.protein}</td> */}
                {/* <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                  <Link to={`/EditUsers/${row.id}`}>  <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button></Link>
                    <Button size="sm" variant="soft" color="danger" onClick={()=>Handledelete(row.id)}>
                      Delete
                    </Button>
                  </Box>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
        <Stack spacing={2}>
      <Pagination count={10} shape="rounded"  onChange={(e,value)=>setCurrentPage(value)}/>
      
    </Stack></div>
       
      </Sheet> 
    </Box></center>
  );
}