import React from 'react';
import Grid from '@mui/material/Grid';
import appointmentPic from '../../../images/pexels-photo-760710.jpeg'
import {Container } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';

const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height:350,
  }
const AppointmentHeader = ({date, setDate}) => {
    return (
        <div>
            <h2>Get An Appointment</h2>
              <Container>
              <Grid container spacing={2}>

                <Grid item xs={12} md={6}>

                   <Calender date={date} setDate={setDate}></Calender>


                </Grid>

                
                <Grid item xs={12} md={6} style={verticalCenter}>
                  <img style={{width:'450px', borderRadius:'8px'}} src={appointmentPic} alt=""/>
                </Grid>
                
                
              
              </Grid>
       </Container>
        </div>
    );
};

export default AppointmentHeader;