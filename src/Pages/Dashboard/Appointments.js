import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Appointments = () => {
    const {user} = useAuth()
    const [appointments, setAppointments] = useState([])


    useEffect( ()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}`
        fetch (url)
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])




    return (
        <div>
            <h2>Your Total Appointments:  {appointments.length}</h2>

            <TableContainer component={Paper}>
      <Table aria-label="Appointments Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Schedule</TableCell>
            <TableCell align="right">Action</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.doctorName}</TableCell>
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
    );
};

export default Appointments;