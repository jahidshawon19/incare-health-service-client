import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({bookingData, date, setBookingSuccess}) => {
    const {departmentName, doctorName,time,space} = bookingData

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={3}>
    
        <Paper elevation={6} sx={{py:3}}>
            <h3>{departmentName}</h3>
            <h5>{doctorName}</h5>
            <h5>{time}</h5>
            <small sx={{color:'red'}}>Avaliable Space {space}</small> <br /> <br />
            <Button onClick={handleOpenModal} variant="contained">Book Appointment</Button>
        </Paper>

    </Grid>
    <BookingModal
    handleCloseModal={handleCloseModal}
    openModal={openModal}
    bookingData={bookingData}
    date={date}

    setBookingSuccess={setBookingSuccess}
    ></BookingModal>
        </>
    );
};

export default Booking;