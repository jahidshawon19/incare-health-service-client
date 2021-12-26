import React, {useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const BookingModal = ({ openModal, handleCloseModal, bookingData, date, setBookingSuccess}) => {

    const {doctorName, time, departmentName} = bookingData 
    const {user} = useAuth()
    const initialInfo = {patientName: user.displayName, email:user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = e =>{

        const field = e.target.name 
        const value = e.target.value 
        const newInfo = {...bookingInfo}
        newInfo[field] = value 
        // console.log(newInfo)
        setBookingInfo(newInfo)



    }



    const handleBookingSubmit = e => {

      // collect data 
  
      const appointment = {
         ...bookingInfo,
         time,
         doctorName,
         departmentName,
         date,
        

      }
     

      // send to the server 

      fetch('https://whispering-springs-94088.herokuapp.com/appointments', {

      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true)
          handleCloseModal()
          
        }
      })

      // console.log(appointment)
      
      e.preventDefault()
      
       
        
    }


    return (
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {doctorName}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" sx={{color:"#ffac33"}} component="h2">
            {departmentName} Department
          </Typography>



         <form onSubmit={handleBookingSubmit}>
       
                <TextField
                disabled
                sx={{width:"90%", m:1}}
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
                
                sx={{width:"90%", m:1}}
                id="outlined-size-small"
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
                
                />

                <TextField
               
                sx={{width:"90%", m:1}}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
               
                />

                <TextField
                
                sx={{width:"90%", m:1}}
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue="Phone Number"
                size="small"
                
                />
                
                <TextField
                disabled
                sx={{width:"90%", m:1}}
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
                />

                <Button type="submit" sx={{m:1}} variant="outlined">Submit</Button>
         </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;