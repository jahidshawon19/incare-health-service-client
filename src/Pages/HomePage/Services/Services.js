import React from 'react';
import SingleService from '../SingleService/SingleService'
import serviceImg from '../../../images/1-11281_healthcare-clipart-personal-care-service-caring-clipart-hd.png'
import Container from '@mui/material/Container';
import './Services.css'


const ourServices =[
    {
        id:1,
        name:'AUDIOLOGY DEPARTMENT',
        description:'Our audiology team is here to help you manage hearing or balance difficulties, with or without the use of assistive listening devices such as hearing aids. We also investigate the causes of hearing loss and balance problems in support of the ear, nose and throat (ENT) department.',
        image: serviceImg
    },
    {
        id:2,
        name:'CARDIOLOGY DEPARTMENT',
        description:'The Cardiology Department has gained reputation for its dynamic and innovation in the diagnosis, investigation and treatment of patients with all forms of heart diseases, both generally encountered and complex cases.',
        image: serviceImg
    },

    {
        id:3,
        name:'ULTRASONOGRAPHY',
        description:'Occupies a dadicated section with wide seperate waiting statioon for male & female equipped with 4D Ultrasonography equipments.',
        image: serviceImg
    },
    {
        id:4,
        name:'NEUROLOGY DEPARTMENT',
        description:'Occupies a dadicated section with wide seperate waiting statioon for male & female equipped with 4D Ultrasonography equipments.',
        image: serviceImg
    },
    {
        id:5,
        name:'GASTROENTEROLOGY DEPARTMENT',
        description:'Occupies a dadicated section with wide seperate waiting statioon for male & female equipped with 4D Ultrasonography equipments.',
        image: serviceImg
    },
    {
        id:6,
        name:'EXECUTIVE CHECK UP',
        description:'Our diagnostic expertise combined with the latest technology in pathology help in determining health problems.',
        image: serviceImg
    },


]


const Services = () => {
    return (
      <>
        <Container>
            <h2>Services We Provided </h2>
            <div className="row">
                {
                    ourServices.map(service => <SingleService
                        key={service.id}
                        serviceData ={service}
                    ></SingleService>)
                }
            </div>
        </Container>
      </>
    );
};

export default Services;