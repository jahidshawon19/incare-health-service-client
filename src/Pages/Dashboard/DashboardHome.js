import * as React from 'react';
import Calender from '../../Pages/Shared/Calender/Calender'
import Appointments from './Appointments'
import Grid from '@mui/material/Grid';





const DashboardHome = () => {

    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={3}>
          
            <Grid item xs={12} sm={5}>
                <Calender
                
                date={date}
                setDate={setDate}
                
                ></Calender>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointments

                    date={date}
                
                ></Appointments>
            </Grid>
            
            </Grid>
    );
};

export default DashboardHome;