import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Axios } from "../../Api/Axios";


function Register() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password } = state;
    

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };
  const OnSubmit = (values) => {
    const data = Axios.get('/login',values);
    console.log(data)
  }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Crée un Compte</h1>
        <div className="social-container">
          <a href="#" className="social">
            <XIcon/>
          </a>
          <a href="#" className="social">
            <GoogleIcon/>
          </a>
          <a href="#" className="social">
            <GitHubIcon/>
          </a>
        </div>
        <span>Utiliser email pour la registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button onClick={OnSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
