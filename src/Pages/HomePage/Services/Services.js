import React, { useState, useEffect } from 'react';
import SingleService from '../SingleService/SingleService'
import Container from '@mui/material/Container';
import './Services.css'



const Services = () => {
    const [ services, setServices] = useState([])

    useEffect(() =>{
        fetch('https://whispering-springs-94088.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
      <>
        <Container>
            <h2>Services We Provided </h2>
            <div className="row">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        serviceData ={service}
                    ></SingleService>)
                }
            </div>
        </Container>
      </>
    );
};

export default Services;