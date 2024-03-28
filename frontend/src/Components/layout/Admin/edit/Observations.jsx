import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import {Button} from '@mui/material';


import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { UserContext } from '../../../ContextApi/ContexteApi';
import { Axios } from '../../../Api/Axios';
import { useEffect, useState } from 'react';
import ReclamationApi from '../../../ContextApi/ReclamationApi';
import { TextareaAutosize } from '@mui/material';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Copyright from '../../../CopyRight/CopyRight';
export default function Observations() {
  const navigate=useNavigate()
  const {user}=UserContext()
  const [Description,setDescription]=useState([])
  const {id}=useParams();
  const handleShow=async(id)=>{
      await ReclamationApi.getobservation(id).then(({data})=>{
      
        setDescription(data.Description)
      
        
      })
      
  }
  useEffect(()=>{
      handleShow(id)
  },[])
  const handleEditConfirmation = (event) => {
    event.preventDefault();
    confirmAlert({
      title: 'Edit Confirmation',
      message: 'Are you sure you want to edit?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            handleSubmit();
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };
  const handleSubmit = async() => {
    
    
    const values= {
      Description ,
      idUser: user.id,
    }
    
    await Axios.put(`/api/observations/${id}`,values)
    navigate('/AdminObservation')
  }
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return (
  <> <br /><br />
    <Box component="form" noValidate onSubmit={handleEditConfirmation} sx={{ mt: 3 }}><TextareaAutosize aria-label="minimum height" cols={41} minRows={8} name='Description' placeholder=""  onChange={(e)=>setDescription(e.target.value)} value={Description}/><br /><br /><br />
     <Button style={{backgroundColor:"#007FFF",color:"white",width:"320px"}} type='submit'>Modifier</Button></Box><Copyright sx={{ mt: 5 }} />
    </> 
  );
  }