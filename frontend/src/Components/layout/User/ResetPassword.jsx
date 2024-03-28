import React, { useState } from 'react';
import { Axios } from '../../Api/Axios';
import { Button, FormGroup, TextField } from '@mui/material';

//import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '@mui/material/Alert';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import Copyright from '../../CopyRight/CopyRight';


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             await Axios.post('/forgot-password', { email }).then(({data}) => {
            setMessage(data.message)});
        } catch (error) {
            setMessage('Failed to send reset link');
        }
    };

    return (<>
        <Stack spacing={4}>
        <Typography variant="h5">Reset password</Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
           
                <FormControl >
                  <InputLabel>Email address</InputLabel>
                  <OutlinedInput  label="Email address" type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
                  {email ? <Alert severity="error">{message}</Alert> : null}
                </FormControl>
             
            {/* {root ? <Alert color="error">{errors.root.message}</Alert> : null} */}
            <Button  type="submit" variant="contained">
              Send recovery link
            </Button>
          </Stack>
        </form>
      </Stack>
      <Copyright sx={{ mt: 5 }} /></>
    );
}

export default ForgotPassword;
