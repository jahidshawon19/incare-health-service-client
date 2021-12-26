import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import '../SingleDoctor/SingleDoctor.css'

import SingleDoctor from '../SingleDoctor/SingleDoctor'

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() =>{
        fetch('https://whispering-springs-94088.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <>
            <Container>
            <h2>Our Consultants</h2>
                <div className="doctor-row">
                    {
                        doctors.map(doctor =>
                            <SingleDoctor
                                key={doctor._id}
                                doctorData = {doctor}
    
                            ></SingleDoctor>
                            )
                    }
                </div>
            </Container>
        </>
    );
};

export default Doctors;