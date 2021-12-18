import React from 'react';
import { Link } from 'react-router-dom';


const SingleDoctor = (props) => {
    const {imageUrl, doctorName, designation, _id} = props.doctorData
    return (
        <div className="doctor-column">
             <div className="doctor-card">
            <img src={imageUrl} alt="Doctor Image" />
            <div className="doctor-container">
                <h2>{doctorName}</h2>
                <p className="title">{designation}</p>
                
                <p><Link to={`/doctor_details/${_id}`}><button className="doctor-button">Details</button></Link> </p>
                
            </div>
        </div>
        </div>
    );
};

export default SingleDoctor;