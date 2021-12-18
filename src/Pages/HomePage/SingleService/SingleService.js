
import React from 'react';
import './SingleService.css'
import Button from '@mui/material/Button';
import serviceImg from '../../../images/1-11281_healthcare-clipart-personal-care-service-caring-clipart-hd.png'
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const {serviceName, _id} = props.serviceData
    return (
        <div className="column">
            <div className="card">
                <img src={serviceImg} alt="" />
                <h3>{serviceName}</h3>
                <Link to={`service_details/${_id}`}><Button variant="contained">Details</Button></Link>
            </div>
        </div>
    );
};

export default SingleService;