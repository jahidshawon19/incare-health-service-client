import { Container } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
import Alert from '@mui/material/Alert';

const bookings = [
    {
        id:1,
        departmentName:'Cardiology',
        doctorName: 'Dr. Waleed Jamal',
        time: '07.00 PM - 10.00 PM',
        space: 14
    },
    {
        id:2,
        departmentName:'Neurology',
        doctorName: 'Dr. Josim Uddin',
        time: '05.00 PM - 10.00 PM',
        space: 10
    },
    {
        id:3,
        departmentName:'Gynecology',
        doctorName: 'Dr. Fahmida',
        time: '06.00 AM - 12.00 PM',
        space: 4
    },
    {
        id:4,
        departmentName:'Ultrasonography',
        doctorName: 'Dr. Tanim Chowdury',
        time: '05.00 PM - 11.00 PM',
        space: 18
    },
    {
        id:5,
        departmentName:'GASTROENTEROLOGY',
        doctorName: 'Dr. Muntasir',
        time: '07.00 PM - 10.00 PM',
        space: 8
    },
    {
        id:6,
        departmentName:'EXECUTIVE CHECK UP',
        doctorName: 'Dr. Waleed Jamal, Dr. Muntakim, Dr. Labib, Dr. Hasib',
        time: '10.00 AM - 06.00 PM',
        space: 15
    },
    {
        id:7,
        departmentName:'Urology',
        doctorName: 'Dr. Kamal Hossen',
        time: '10.00 AM - 02.00 PM',
        space: 9
    },
    {
        id:8,
        departmentName:'Medicine',
        doctorName: 'Dr. Rashed Mirjada',
        time: '05.00 AM - 11.00 PM',
        space: 15
    },

 
]





const AvailableAppointment = ({date}) => {
   const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <h2>Available Appointments on {date.toDateString()}</h2>
            {
                 bookingSuccess && <Alert severity="success">Your Appointment Booked Successfully.</Alert>
              }
            <Grid container spacing={2}>


                  {
                      bookings.map(booking => <Booking
                        key={booking.id}
                        bookingData = {booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}

                      ></Booking>)
                  }
                   
        </Grid>
        </Container>
    );
};

export default AvailableAppointment;