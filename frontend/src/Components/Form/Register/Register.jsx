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

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Axios } from '../../Api/Axios';
import { Alert } from '@mui/material';
import Copyright from '../../CopyRight/CopyRight';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const[errorEmail,setErrorEmail]=React.useState()
  const[errorTelephone,setErrorTelephone]=React.useState()
  const[errorAdresse,setErrorAdresse]=React.useState()
  const[errorPrenom,setErrorPrenom]=React.useState()
  const[errorNom,setErrorNom]=React.useState()
  const[errorPass,setErrorPass]=React.useState()
  const[success,setSuccess]=React.useState()
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values={
      nom:data.get('firstName'),
      prenom:data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      // confirmation_password: data.get('password_confirmation'),
      telephone:data.get('telephone'),
      adresse:data.get("adresse")
  }

    try {
      await Axios.post('/register',values)
     
      setSuccess('User added successfully!')
    } catch (error) {
      setErrorEmail(error.response.data.errors.email);
      setErrorNom(error.response.data.errors.nom);
      setErrorPrenom(error.response.data.errors.prenom);
      setErrorAdresse(error.response.data.errors.adresse);
      setErrorPass(error.response.data.errors.password);
      setErrorTelephone(error.response.data.errors.telephone);
    }
    }

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                /><span style={{color:"red"}}>{errorPrenom}</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
                <span style={{color:"red"}}>{errorNom}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <span style={{color:"red"}}>{errorEmail}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                /> <span style={{color:"red"}}>{errorPass}</span>
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telephone"
                  label="telephone"
                  type="telephone"
                  id="telephone"
                  autoComplete="new-telephone"
                />
                <span style={{color:"red"}}>{errorTelephone}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="adresse"
                  label="Adresse"
                  type="adresse"
                  id="adresse"
                  
                />
                <span style={{color:"red"}}>{errorAdresse}</span>
              </Grid>

              
            </Grid><br/>{     success?   <Alert>{success}</Alert>:null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

