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
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, Hidden, MenuItem, Select, TextareaAutosize } from '@mui/material';
import { Axios } from '../../../../Api/Axios';
import {UserContext} from "../../../../ContextApi/ContexteApi/"
import axios from 'axios';
import { useState } from 'react';
import styled from '@emotion/styled';

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

export default function AddReclamation() {
  const [ville,setVille]=useState()
  const[errorDescription,setDes]=useState()
  
  const {user}=UserContext()
   // axios.get('ma.json').then((res)=>setVille(res.data))
  const navigate=useNavigate()
    const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
const values={
      ville: data.get('ville'),
      description: data.get('description'),
      status: "En Cours",
      idUser:user.id

    }
    try{
      
    await Axios.post("api/reclamations" ,values)
    alert('Reclamation added successfully!');
navigate('/reclamationUser')
}catch(error){
setVille(error.response.data.errors.ville);

setDes(error.response.data.errors.description);
}
  };
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
          <br /><br /><br /><br /><br /><br />
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  
                  
               />
                  
               <span style={{color:"red"}}>{ville}</span>
              </Grid><br /><br />
              <Grid item xs={12}>
              <Textarea required aria-label="minimum height" style={{
                
                  color:'blue'
                
              }}label="Description"  name={"description"}minRows={6} cols={100}  placeholder="" /><br/><span style={{color:"red"}}>{errorDescription}</span>
              </Grid>
              </Grid>
                <Hidden
                  type='hidden'
                  
                 
                /> <br />
              
              
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ajouter
            </Button>
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}

