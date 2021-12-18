import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors'

const Home = () => {
    return (

        <>
          <Navbar></Navbar>
            <Banner></Banner>
         <Services></Services>
         <Doctors></Doctors>
        </>
       
       
     
    );
};

export default Home;