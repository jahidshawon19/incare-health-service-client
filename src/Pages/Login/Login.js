import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import login from '../../images/login.jpg'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useLocation,useHistory } from 'react-router';


const Login = () => {

    const [loginData, setLoginData] = useState({})

    const {authError,user, loginUser, isLoading} = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e =>{
        const field = e.target.name 
        const value = e.target.value 

        const newLoginData = {...loginData}
        newLoginData[field] = value 
        setLoginData(newLoginData)
    }

    const handleLogin= e =>{
       
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }



    return (
        <Container>
            <Grid sx={{p:8}} container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                          <Typography variant="h6" >
                            Login
                        </Typography>
                        <form onSubmit={handleLogin}>
                        <TextField sx={{width:'65%', m:1}} id="standard-basic" label="Your Email" onChange={handleOnChange} name="email" variant="standard" />
                        <TextField sx={{width:'65%', m:1}} id="standard-basic" label="Your Password" onChange={handleOnChange} name="password" type="password" variant="standard" />
                        <Button sx={{width:'65%', m:1}} type="submit" color="info" variant="contained">Login</Button>
                        <p>Are You New Here? <Link to="/register" ><Button color="inherit" sx={{color:'green'}}>Be Register</Button></Link> </p>
                        </form>


                        {
                  isLoading &&  <CircularProgress />
              }
              {
                  user?.email && <Alert severity="success">Login Successfully</Alert>
              }

              {
                  authError && <Alert severity="error">{authError}</Alert>
              }
                </Grid>

                <Grid item xs={12} md={6}>
                <img src={login} style={{width:'100%'}} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;