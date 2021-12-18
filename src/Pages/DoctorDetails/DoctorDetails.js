import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../Shared/Navbar/Navbar';

const DoctorDetails = () => {
    const [doctor, setDoctor] = useState({})
    const {id} = useParams()

    useEffect(() =>{
        const url = `http://localhost:5000/doctors/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setDoctor(data))
    }, [])
    return (
        <>
        <Navbar></Navbar>

            <h1>{doctor.doctorName}</h1>
            <p>{doctor.designation}</p>
            <h3>{doctor.study}</h3>
            <p>Email: {doctor.doctorEmail}</p>
            <p>Phone: {doctor.doctorPhone}</p>
            <p>Room No: {doctor.roomNo}</p>
            
        </>
    );
};

export default DoctorDetails;