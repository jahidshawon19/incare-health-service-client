import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (

        <>
          <Navbar></Navbar>
            <Banner></Banner>
         <Services></Services>
        </>
       
       
     
    );
};

export default Home;