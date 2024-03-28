// // import React, { useState } from "react";
// // import {useNavigate} from "react-router-dom"
// // import GoogleIcon from '@mui/icons-material/Google';
// // import XIcon from '@mui/icons-material/X';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import { Axios } from "../../Api/Axios";
// // function Login() {
// //   const navigate =useNavigate()
// //   // const [state, setState] = React.useState({
// //   //   email: "",
// //   //   password: ""
// //   // });
// //   // const handleChange = evt => {
// //   //   const value = evt.target.value;
// //   //   setState({
// //   //     ...state,
// //   //     [evt.target.name]: value
// //   //   });
// //   // };
// //   const[email,setEmail]=useState()
// //   const[password,setPassword]=useState()

// //   const handleOnSubmit =async evt => {
// //     evt.preventDefault();
// //     if(email && password){
// //       try {
// //         await Axios.get('/sanctum/csrf-cookie')
// //         await Axios.post('/login',{email,password}).then((res)=>{
// //           if(res.status ===204){
// //               navigate('/UserHome')
// //           }
// //         })
// //       } catch (error) {
// //         console.log(error)
// //       }
// //     }

// //    // const { email, password } = state;
// //     // alert(`You are login with email: ${email} and password: ${password}`);

// //   //   for (const key in state) {
// //   //     setState({
// //   //       ...state,
// //   //       [key]: ""
// //   //     });
// //   //   }
// //   // };
// //   // const OnSubmit = () => {
// //   //   const axios = Axios.defaults;
// //   //   console.log(axios)
// //    }
// //   return (
// //     <div className="form-container sign-in-container">
// //       <form onSubmit={handleOnSubmit}>
// //         <h1>Se Connecter</h1>
// //         <div className="social-container">
// //           <a href="#" className="social">
// //             <XIcon/>
// //           </a>
// //           <a href="#" className="social">
// //             <GoogleIcon/>
// //           </a>
// //           <a href="#" className="social">
// //             <GitHubIcon />
// //           </a>
// //         </div>
// //         <span>ou utiliser un compte</span>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           name="email"
// //           value={email}
// //           onChange={(e)=>setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e)=>setPassword(e.target.value)}
// //         />
// //         <a href="#">Mot de Pass oubliez?</a>
// //         <button >Connecter</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;


// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import Container from '@mui/material/Container';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { TextareaAutosize } from '@mui/material';

// // function Copyright(props) {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// //}

// // TODO remove, this demo shouldn't need to reset the theme.

// // const defaultTheme = createTheme();

// // export default function AddObservation() {
  
// //   };

// //   return (
// //     <ThemeProvider theme={defaultTheme}>
// //       <Container component="main" maxWidth="xs">
// //         <CssBaseline />
// //         <Box
// //           sx={{
// //             marginTop: 8,
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //             <LockOutlinedIcon />
// //           </Avatar>
// //           <Typography component="h1" variant="h5">
            
// //           </Typography>
// //           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
// //             <Grid container spacing={2}>
// //               <Grid item >
// //                 <TextareaAutosize
// //                 maxRows={6}
// //                   autoComplete="given-name"
// //                   name="firstName"
// //                   required
// //                   fullWidth
// //                   id="firstName"
// //                   label="First Name"
// //                   autoFocus
// //                 />
// //               </Grid>
              
              
// //             </Grid>
// //             <Button
// //               type="submit"
// //               fullWidth
// //               variant="contained"
// //               sx={{ mt: 3, mb: 2 }}
// //             >
// //               Sign Up
// //             </Button>
            
// //           </Box>
// //         </Box>
// //         <Copyright sx={{ mt: 5 }} />
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }
// import * as React from 'react';
// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
// import { styled } from '@mui/system';
// import {Button} from '@mui/material';
// import Box from '@mui/joy/Box';
// import { useNavigate, useParams } from 'react-router-dom';


// import { UserContext } from '../../../ContextApi/ContexteApi';
// import { Axios } from '../../../Api/Axios';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// export default function Users() {
//   const navigate=useNavigate()
//   const {user}=UserContext()
//   const {id}=useParams()
//   const handleSubmit = async(event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const values= {
//       description: data.get('description'),
//       idUser: user.id,
//     }
    
    
//     console.log(values)
//     await Axios.put("/api/suggetions/"+id,values)
//     navigate('/Usersurggestion')
//   }
//   const handleEditConfirmation = (event) => {
//     event.preventDefault();
//     confirmAlert({
//       title: 'Edit Confirmation',
//       message: 'Are you sure you want to edit?',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => {
//             handleSubmit();
//           }
//         },
//         {
//           label: 'No',
//           onClick: () => {}
//         }
//       ]
//     });
//   };
//   const blue = {
//     100: '#DAECFF',
//     200: '#b6daff',
//     400: '#3399FF',
//     500: '#007FFF',
//     600: '#0072E5',
//     900: '#003A75',
//   };

//   const grey = {
//     50: '#F3F6F9',
//     100: '#E5EAF2',
//     200: '#DAE2ED',
//     300: '#C7D0DD',
//     400: '#B0B8C4',
//     500: '#9DA8B7',
//     600: '#6B7A90',
//     700: '#434D5B',
//     800: '#303740',
//     900: '#1C2025',
//   };

//   const Textarea = styled(BaseTextareaAutosize)(
//     ({ theme }) => `
//     box-sizing: border-box;
//     width: 320px;
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     font-weight: 400;
//     line-height: 1.5;
//     padding: 8px 12px;
//     border-radius: 8px;
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//     box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//     &:hover {
//       border-color: ${blue[400]};
//     }

//     &:focus {
//       border-color: ${blue[400]};
//       box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//     }

//     // firefox
//     &:focus-visible {
//       outline: 0;
//     }
//   `,
//   );

//   return (
//   <> <Box component="form" noValidate onSubmit={handleEditConfirmation} sx={{ mt: 3 }}><Textarea aria-label="minimum height" minRows={8} name='description' placeholder="" /><br /><br /><br />
//   <Button style={{backgroundColor:"#007FFF",color:"white",width:"320px"}} type='submit'>Modifier</Button></Box>
//  </> 
    
//   );
//   }


import Avatar from '@mui/joy/Avatar';
import '@fontsource/inter';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import { confirmAlert } from 'react-confirm-alert';
import { Axios } from '../../../Api/Axios';
import ReclamationApi from '../../../ContextApi/ReclamationApi';
import Copyright from '../../../CopyRight/CopyRight';

export default function Users() {
  
  const [nom,setNom]=useState()
  const [prenom,setprenom]=useState()
  const [email,setemail]=useState()
  const [telephone,settelephone]=useState()
  const [adresse,setadresse]=useState()
  const navigate=useNavigate()
  const{id}=useParams()
  const handleUser=async()=>{

    await Axios.get(`/api/clients/${id}`).then(({data})=>{
      setNom(data.nom)
      setprenom(data.prenom)
      setemail(data.email)
      settelephone(data.telephone)
      setadresse(data.adresse)
    }
    )
    }
    const handkleSubmit=async()=>{
         await ReclamationApi.editclient(id,{
          nom,prenom,email,telephone,adresse
         });
         navigate('/AdminUsers')
    }

  useEffect(()=>{
    handleUser()
  },[])
  const handleEditConfirmation = (e) => {
    e.preventDefault()
    confirmAlert({
      title: 'Edit Confirmation',
      message: 'Are you sure you want to edit?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            handkleSubmit()
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };
 
  return (<>
    <Card
      sx={{
        width: 600,
        height:600,
        maxWidth: '100%',
        boxShadow: 'lg',
        marginTop:"300px"
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '7rem' }} />
        {/* <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          
        </Chip> */}
       <div style={{display:"-ms-inline-grid",margin:"5px"}} ><TextField level="body-sm" sx={{ maxWidth: '10ch' }} type='text' onChange={(e)=>setNom(e.target.value)} value={nom} style={{margin:"5px"}}></TextField><TextField level="body-sm" sx={{ maxWidth: '10ch' }} type='text' onChange={(e)=>setprenom(e.target.value)} style={{margin:"5px"}} value={prenom} /></div> 
        <TextField level="body-sm" sx={{ maxWidth: '34ch' }} type='text'onChange={(e)=>setemail(e.target.value)} value={email}   style={{marginBottom:"5px"}}/>
        
       
        <TextField level="body-sm" sx={{ maxWidth: '34ch' }} type='text' onChange={(e)=>settelephone(e.target.value)} value={telephone}  style={{marginBottom:"5px"}}/>
       
        <TextField level="body-sm" sx={{ maxWidth: '34ch' }} type='text' onChange={(e)=>setadresse(e.target.value)} value={adresse} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          {/* <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                />
                <path
                  fill="currentColor"
                  d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral">
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351a9.757 9.757 0 0 1-.92.87a13.156 13.156 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003c.027.061.05.118.094.229l.017.04c1.513-.17 3.109-.107 4.656.103c.206.027.4.056.584.087Zm-9.385-7.45a46.15 46.15 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767c.33-.274.594-.532.796-.755A7.968 7.968 0 0 0 12 4c-.476 0-.942.042-1.396.121ZM4.253 9.997a29.21 29.21 0 0 0 2.04-.123a31.53 31.53 0 0 0 4.862-.822a54.36 54.36 0 0 0-2.7-4.227a8.018 8.018 0 0 0-4.202 5.172Zm1.53 7.038a14.21 14.21 0 0 1 1.575-1.899c1.454-1.49 3.17-2.65 5.156-3.29l.062-.018c-.165-.364-.32-.689-.476-.995c-1.836.535-3.77.869-5.697 1.042c-.94.085-1.783.122-2.403.128a7.966 7.966 0 0 0 1.784 5.032Zm9.221 2.38a35.951 35.951 0 0 0-1.632-5.709c-2 .727-3.596 1.79-4.829 3.058a9.77 9.77 0 0 0-1.317 1.655A7.964 7.964 0 0 0 12 20a7.977 7.977 0 0 0 3.005-.583Zm1.874-1.075a7.998 7.998 0 0 0 2.987-4.87c-.34-.085-.771-.17-1.245-.236a12.025 12.025 0 0 0-3.18-.033a39.39 39.39 0 0 1 1.438 5.14ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"
                />
              </svg>
            </SvgIcon>
          </IconButton> */}
        </Box>
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
           <Button type='submit' onClick={handleEditConfirmation}>Modifier</Button>  
            
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
      
    </Card><Copyright sx={{ mt: 5 }} /></>
  );
}
