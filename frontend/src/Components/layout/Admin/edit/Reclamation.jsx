// import React, { useState } from "react";
// import {useNavigate} from "react-router-dom"
// import GoogleIcon from '@mui/icons-material/Google';
// import XIcon from '@mui/icons-material/X';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Axios } from "../../Api/Axios";
// function Login() {
//   const navigate =useNavigate()
//   // const [state, setState] = React.useState({
//   //   email: "",
//   //   password: ""
//   // });
//   // const handleChange = evt => {
//   //   const value = evt.target.value;
//   //   setState({
//   //     ...state,
//   //     [evt.target.name]: value
//   //   });
//   // };
//   const[email,setEmail]=useState()
//   const[password,setPassword]=useState()

//   const handleOnSubmit =async evt => {
//     evt.preventDefault();
//     if(email && password){
//       try {
//         await Axios.get('/sanctum/csrf-cookie')
//         await Axios.post('/login',{email,password}).then((res)=>{
//           if(res.status ===204){
//               navigate('/UserHome')
//           }
//         })
//       } catch (error) {
//         console.log(error)
//       }
//     }

//    // const { email, password } = state;
//     // alert(`You are login with email: ${email} and password: ${password}`);

//   //   for (const key in state) {
//   //     setState({
//   //       ...state,
//   //       [key]: ""
//   //     });
//   //   }
//   // };
//   // const OnSubmit = () => {
//   //   const axios = Axios.defaults;
//   //   console.log(axios)
//    }
//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit}>
//         <h1>Se Connecter</h1>
//         <div className="social-container">
//           <a href="#" className="social">
//             <XIcon/>
//           </a>
//           <a href="#" className="social">
//             <GoogleIcon/>
//           </a>
//           <a href="#" className="social">
//             <GitHubIcon />
//           </a>
//         </div>
//         <span>ou utiliser un compte</span>
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//         />
//         <a href="#">Mot de Pass oubliez?</a>
//         <button >Connecter</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate, useParams} from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, Select, TextareaAutosize } from '@mui/material';



import { useEffect, useState } from 'react';
import { UserContext } from '../../../ContextApi/ContexteApi';
import { Axios } from '../../../Api/Axios';
import ReclamationApi from '../../../ContextApi/ReclamationApi';
import { Edit } from '@mui/icons-material';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Reclamation() {
  const [ville,setVille]=useState([])
  const [Description,setDescription]=useState([])
  const [status,setStatus]=useState([])
  let navigate=useNavigate()
  const {id}=useParams();
  const handleShow=async(id)=>{
      await ReclamationApi.getReclamation(id).then(({data})=>{
        setVille(data.ville)
        setDescription(data.description)
        setStatus(data.status)
      })
}
const {user}=UserContext()
const handleEditConfirmation = (e) => {
  e.preventDefault()
  confirmAlert({
    title: 'Edit Confirmation',
    message: 'Are you sure you want to edit?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
          EditShow();
        }
      },
      {
        label: 'No',
        onClick: () => {}
      }
    ]
  });
};
const EditShow=async()=>{
    

    
    const values={
    
    ville,
    description:Description,
    status: status?"Traitée":"En Cours"
    }


 
    await Axios.put(`/api/reclamations/${id}`,values)
navigate('/AdminReclamation')
  }     

  useEffect(()=>{
      handleShow(id)},[])

  
  
   // axios.get('ma.json').then((res)=>setVille(res.data))
  
//     const handleSubmit = async(event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
// const values={
//       ville: data.get('ville'),
//       description: data.get('description'),
//       status: data.get('status'),
//       idUser:user.id

//     }
//     await Axios.put("api/reclamations" ,values)
// navigate('/reclamationUser')
//   };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleEditConfirmation}> 
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ville"
                  type='text'
                  label="Ville"
                  name="ville"
                  placeholder='Selectionner un Ville'
                  onChange={(e)=>setVille(e.target.value)}
                value={ville}
            
                  
                  
               />
                  
               
              </Grid><br /><br />
              <Grid item xs={12}>
              <TextareaAutosize required aria-label="minimum height" label="Description"  name={"description"}minRows={6} cols={100}   onChange={(e)=>setDescription(e.target.value)}
                value={Description}placeholder="" />
              </Grid>
              <Grid item xs={12}>
              <Checkbox
                  
                  onChange={(e)=>setStatus(e.target.checked)}
                 
                />Traitée
              </Grid>
              
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Modifier
            </Button>
            
          </Box>
        </Box>
       
      </Container><Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}

