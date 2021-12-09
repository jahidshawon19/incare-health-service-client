import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';







const Register = () => {
    const [loginData, setLoginData] = useState({})

    const {authError,user, registerUser, isLoading} = useAuth()

    const handleOnChange = e =>{
        const field = e.target.name 
        const value = e.target.value 

        const newLoginData = {...loginData}
        newLoginData[field] = value 
        setLoginData(newLoginData)
    }

    const handleLogin= e =>{
        if(loginData.password !== loginData.password2){
            alert('Password Did Not Match')
            return 
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault()
    }

    return (
        <Container>
            <Grid sx={{p:8}} container spacing={2}>


                <Grid item xs={12} md={6}>
                <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526&dl=1" style={{width:'100%'}} />
                </Grid>

                <Grid sx={{mt:10}} item xs={12} md={6}>
                          <Typography variant="h6" >
                            Registration
                        </Typography>
              {
                  !isLoading &&  <form onSubmit={handleLogin}>
                  <TextField sx={{width:'65%', m:1}} id="standard-basic" type="email" label="Your Email" onChange={handleOnChange} name="email" variant="standard" />

                  <TextField sx={{width:'65%', m:1}} id="standard-basic" label="Your Password" onChange={handleOnChange} name="password" type="password" variant="standard" />

                  <TextField sx={{width:'65%', m:1}} id="standard-basic" label="Re-type Password" onChange={handleOnChange} name="password2" type="password" variant="standard" />

                  <Button sx={{width:'65%', m:1, }} color="warning" type="submit"  variant="contained">Confirm Registration</Button>
                  <p>Already Registered? <Link to="/login" ><Button sx={{color:'green'}} color="inherit">Login Now</Button></Link> </p>
                  </form>
              }

              {
                  isLoading &&  <CircularProgress />
              }
              {
                  user?.email && <Alert severity="success">Congratulation! Your Registration Completed Successfully</Alert>
              }

              {
                  authError && <Alert severity="error">{authError}</Alert>
              }
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;