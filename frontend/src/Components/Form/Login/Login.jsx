
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import {Link} from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Axios } from '../../Api/Axios';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../../ContextApi/ContexteApi';
// import { useState } from 'react';
// import Copyright from '../../CopyRight/CopyRight';
// import { set } from 'react-hook-form';
// import { Alert } from '@mui/material';



// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function Login() {
//   const navigate=useNavigate()
//   const[errorEmail,setError]=useState()
        
//          const [check1,setCheck]=useState()
//   const {login, setAuthenticated, setToken} = UserContext()
//   const handleSubmit =async (event) => {

//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const check=data.get('check')
    
//      const email=data.get('email');
//      const password =data.get('password');
//      if(email && password  ){
      
//         // await Axios.post('/login',{email,password}).then(({status,data})=>{
//         //     if(status===204){
//         //       navigate('/UserHome')
//         //     }
//         // })
//         try {
//            //await Axios.get('/sanctum/csrf-cookie');
//            //await AxiosC.post('/login',{email,password})
//            login(email,password).then(({status,data})=>{
//              setToken(data.token)
            
//              setAuthenticated(true)
//              if(status === 200){
//                const {role}=data.user
//                switch(role){
//                  case "user":
                  
                   
//                    navigate('/UserHome')
//                    break
//                  case "admin":
                   
//                    navigate('/AdminHome')
//                    break;
//                //   case "client":
                   
//                //     navigate('/client')
//                } }
//          })
//        } catch (error) {
//         console.log(error.response.data.errors.email)
//        }
//      }
//     else{
//       setError("Invalid credentials")
//       setCheck("You must accept Remember")
//     }}
     
    
  

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <span style={{color:"red"}}>{errorEmail}</span>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
            
//             <FormControlLabel
//               control={<Checkbox  color="primary" name='check' />}
//               label="Remember me"
//             /><br/><span style={{color:"red"}}>{check1}</span>
//             <Grid item>
//                 {/* <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link> */}{errorEmail?<Alert severity="error">{errorEmail}</Alert>:null}
//               </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link to="/Forgotpassword" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
              
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Axios } from '../../Api/Axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../ContextApi/ContexteApi';
import { Alert } from '@mui/material';
import Copyright from '../../CopyRight/CopyRight';

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [checkError, setCheckError] = useState('');

  const { login, setAuthenticated, setToken } = UserContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const check = data.get('check');
    const email = data.get('email');
    const password = data.get('password');

    if (email && password) {
      try {
        const response = await Axios.post('/login', { email, password });
        if (response.status === 200) {
          const { token, user } = response.data;
          setToken(token);
          setAuthenticated(true);

          const { role } = user;
          switch (role) {
            case 'user':
              navigate('/UserHome');
              break;
            case 'admin':
              navigate('/AdminHome');
              break;
            // Add cases for other roles if needed
            default:
              break;
          }
        }
      } catch (error) {
        setErrorEmail(error.response?.data?.errors?.email || '');
        setErrorPassword(error.response?.data?.errors?.password || '');
        setCheckError(error.response?.data?.errors?.check || '');
      }
    } else {
      setErrorEmail('Email is required');
      setErrorPassword('Password is required');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component="main" maxWidth="xs" style={{marginBottom:"100px"}}>
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            {errorEmail && <Alert severity="error">{errorEmail}</Alert>}
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            {errorPassword && <Alert severity="error">{errorPassword}</Alert>}
            <FormControlLabel control={<Checkbox color="primary" name="check" />} label="Remember me" />
            {checkError && <Alert severity="error">{checkError}</Alert>}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            <Grid container>
              <Grid item xs>
                <Link to="/Forgotpassword" variant="body2">Forgot password?</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
