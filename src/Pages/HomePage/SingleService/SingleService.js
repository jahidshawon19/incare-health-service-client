
import React from 'react';
import './SingleService.css'
import Button from '@mui/material/Button';


const SingleService = (props) => {
    const {name, image} = props.serviceData
    return (
        <div className="column">
            <div className="card">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <Button variant="contained">Details</Button>
            </div>
        </div>
    );
};

export default SingleService;