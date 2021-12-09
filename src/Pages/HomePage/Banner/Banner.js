import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/pexels-pixabay-40568.jpg'
import { Typography, Button,Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const bannerBg = {
  backgroundImage: 'linear-gradient(to top, #09203f 0%, #537895 100%)'

}


const verticalCenter ={
  display: 'flex',
  alignItems: 'center',
  height:450,
}

const Banner = () => {
    return (
      <div style={bannerBg}>

        <Container  sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>

                <Grid style={{ ...verticalCenter,textAlign:'left'}} item xs={12} md={5}>

                    <Box>
                        <Typography variant="h3" sx={{color:'white'}}>
                          Support Better Patient Sevices
                      </Typography>
                      <Typography variant="h6" sx={{my:4,fontSize: 15, color:'white'}}>
                        Incare Health Ready to support better health care services for patients to achieve a high degree of patient satisfaction
                      </Typography>
                      <Link to="/appointment"> <Button variant="contained">Get Appointment</Button></Link>
                    </Box>

                </Grid>


                <Grid item xs={12} md={7} style={verticalCenter}>
                  <img style={{width:'550px', borderRadius:'8px'}} src={bg} alt=""/>
                </Grid>
                
                
              
              </Grid>
       </Container>
    </div>
    );
};

export default Banner;