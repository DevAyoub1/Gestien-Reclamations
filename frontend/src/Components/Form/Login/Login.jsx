import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Axios } from "../../Api/Axios";
function Login() {
  const navigate =useNavigate()
  // const [state, setState] = React.useState({
  //   email: "",
  //   password: ""
  // });
  // const handleChange = evt => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // };
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()

  const handleOnSubmit =async evt => {
    evt.preventDefault();
    if(email && password){
      try {
        await Axios.get('/sanctum/csrf-cookie')
        await Axios.post('/login',{email,password}).then((res)=>{
          if(res.status ===204){
              navigate('/UserHome')
          }
        })
      } catch (error) {
        console.log(error)
      }
    }

   // const { email, password } = state;
    // alert(`You are login with email: ${email} and password: ${password}`);

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };
  // const OnSubmit = () => {
  //   const axios = Axios.defaults;
  //   console.log(axios)
   }
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Se Connecter</h1>
        <div className="social-container">
          <a href="#" className="social">
            <XIcon/>
          </a>
          <a href="#" className="social">
            <GoogleIcon/>
          </a>
          <a href="#" className="social">
            <GitHubIcon />
          </a>
        </div>
        <span>ou utiliser un compte</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <a href="#">Mot de Pass oubliez?</a>
        <button onClick={OnSubmit}>Connecter</button>
      </form>
    </div>
  );
}

export default Login;
