import React, { useRef, useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = (props) => {
   const [isHealthy, setIsHealthy] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   

    const userIndividualID = useRef();
    const userDateTime = useRef();
    const userSightingLocation = useRef();
    const userHealthy = useRef(null);
    const userScientistEmail = useRef();
    const userCreateTime = useRef();

    
    const handleCheckChange = (event) => {
        const isHealthy = event.target.checked;
        console.log(isHealthy);
        setIsHealthy(isHealthy);
    };

    


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        const userSighting = {date_time: userDateTime.current?.value, sightLocation: userSightingLocation.current?.value, healthy: isHealthy, ScientistEmail: userScientistEmail.current?.value, createAt: userCreateTime.current?.value, individual_id:userIndividualID.current?.value }
        if (!isValidEmail(userScientistEmail.current.value)){
            setErrorMessage('Invalid email address! Please enter a valid email.');
        } else {
          setErrorMessage(''); // Clear the error message if the email is valid
        }
        
        console.log("Inside the component", userSighting);
        props.submit(userSighting);
    }
    

    //Form Validation 
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return (
        <Form className='form-class' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Sighting info for individual ID: </Form.Label>
                <input
                    type="text"
                    ref={userIndividualID}
                    placeholder="Individual ID"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date & Time </Form.Label>
                <input
                    type="datetime-local"
                    ref={userDateTime}
                    placeholder="Sighting Date/Time"
                    required
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Sighting Location </Form.Label>
                <input
                    type="text"
                    ref={userSightingLocation}
                    placeholder="Sighting Location"
                    required
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Scientist Email </Form.Label>
                <input
                    type="text"
                    ref={userScientistEmail}
                    placeholder="Scientist Email"
                    required
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Created Time </Form.Label>
                <input
                    type="text"
                    ref={userCreateTime}
                    placeholder="Created Time"
                    required
                    
                />
            </Form.Group>
            <Form.Check
                type={'checkbox'}
                id={`isCurrent`}
                checked={isHealthy}
                onChange={handleCheckChange}
                label={`Is the animal healthy?`}
            />
            <Form.Group>
            <button type="submit">Submit</button>
            </Form.Group>
        </Form>
    );
};


export default MyForm