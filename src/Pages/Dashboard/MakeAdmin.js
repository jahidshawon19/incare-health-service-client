import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';










const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e =>{
       
       
        setEmail(e.target.value )
        
        
    }
    const handleAdminSubmit = e =>{
        const user = { email }

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                
                setSuccess(true)
            }
        })
        e.preventDefault(user)
    }

    return (
        <div>
            <h2>Make Admin</h2>

            <form onSubmit={handleAdminSubmit} sx={{mt:3}}>
            <TextField sx={{width:'25%'}} type="email" id="standard-basic" label="Email" variant="standard" onBlur={handleOnBlur} />
            
            <p><Button type="submit" variant="contained">Make Admin</Button></p> 
            </form>

             {
                 success && <Alert severity="success">Made Admin Successfully</Alert>
              }


        </div>
    );
};

export default MakeAdmin;