import React, { useRef } from 'react';
import './AddDoctor.css'

const AddDoctor = () => {

    const imageUrlRef = useRef()
    const doctorNameRef = useRef()
    const designationRef = useRef()
    const doctorEmailRef = useRef()
    const doctorPhoneRef = useRef()
    const roomNoRef = useRef()
    const studyRef  = useRef()



    const handleAddDoctor = e =>{
        const imageUrl = imageUrlRef.current.value 
        const doctorName = doctorNameRef.current.value 
        const designation = designationRef.current.value 
        const doctorEmail = doctorEmailRef.current.value 
        const doctorPhone = doctorPhoneRef.current.value 
        const roomNo = roomNoRef.current.value 
        const study = studyRef.current.value 


        const newDoctor = {imageUrl, doctorName, doctorEmail, doctorPhone,designation, roomNo, study}


        
        fetch('https://whispering-springs-94088.herokuapp.com/doctors', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newDoctor)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New Doctor Added')
                e.target.reset() // reset form 
            }
        })

        e.preventDefault()
    }





    return (
        <div>
            <h2>Add Doctor</h2>
            <form  onSubmit={handleAddDoctor}>
               
               <input className="nrc" type="text"  placeholder="Image URL" ref={imageUrlRef} />
               <input className="nrc" type="text"  placeholder="Doctor Name" ref={doctorNameRef} />
               <input className="nrc" type="text"  placeholder="Designation" ref={designationRef} />
               <input className="nrc" type="text"  placeholder="Email" ref={doctorEmailRef} />
               <input className="nrc" type="text"  placeholder="Mobile No" ref={doctorPhoneRef} />
               <input className="nrc" type="text"  placeholder="Room No" ref={roomNoRef} />
               <input className="nrc" type="text"  placeholder="Degree" ref={studyRef} />
               
               <input className="nrg" type="submit" value="Add Doctor"/>
               
           </form>
        </div>
    );
};

export default AddDoctor;