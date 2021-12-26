import React, { useRef } from 'react';
import './AddService.css'

const AddService = () => {

    const serviceNameRef = useRef()
    const serviceDetailsRef = useRef()

    const handleAddService = e =>{
        const serviceName = serviceNameRef.current.value 
        const serviceDetails = serviceDetailsRef.current.value 
        const newService = {serviceName, serviceDetails}
        
        

        fetch('https://whispering-springs-94088.herokuapp.com/services', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Service Added Successfully')
                e.target.reset() // reset form 
            }
        })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Add Service</h2>
             <form  onSubmit={handleAddService}>
               
                <input className="add-service-input" type="text" ref={serviceNameRef} placeholder="Service Name" />
                <textarea  cols="30" rows="10" ref={serviceDetailsRef} placeholder="Service Details"></textarea>
                <input className="add-service-button" type="submit" value="Add Service"/>
                
            </form>
        </div>
    );
};

export default AddService;