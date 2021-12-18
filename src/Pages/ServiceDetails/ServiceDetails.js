import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../Shared/Navbar/Navbar';

const ServiceDetails = () => {
    
    const [service, setService] = useState({})
    const {id} = useParams()

    useEffect(() =>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setService(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <h2>{service.serviceName}</h2>
            <p>{service.serviceDetails}</p>
        </div>
    );
};

export default ServiceDetails;