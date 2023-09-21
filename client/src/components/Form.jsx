import React, { useRef, useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = (props) => {
   

    const userIndividualID = useRef();
    const userDateTime = useRef();
    const userSightingLocation = useRef();
    //const userHealthy = useRef();
    const userScientistEmail = useRef();
    const userCreateTime = useRef();

    // //create functions that handle the event of the user typing into the form
    // const handleNameChange = (event) => {
    //     const firstname = event.target.value;
    //     setStudent((student) => ({ ...student, firstname }));

    // };

    // const handleLastnameChange = (event) => {
    //     const lastname = event.target.value;
    //     setStudent((student) => ({ ...student, lastname }));
    // };

    // const handleCheckChange = (event) => {
    //     const is_healthy = event.target.checked;
    //     //console.log(iscurrent);
    //     setHealthy(true);
    // };

    // const clearForm = () => {
    //     setStudent({ firstname: "", lastname: "", is_current: false })
    // }

    // //A function to handle the post request
    // const postStudent = (newStudent) => {
    //     return fetch("http://localhost:8080/api/students", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             //console.log("From the post ", data);
    //             //I'm sending data to the List of Students (the parent) for updating the list
    //             onSaveStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };

    // //A function to handle the post request
    // const putStudent = (toEditStudent) => {
    //     return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(toEditStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             onUpdateStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        const userSighting = {date_time: userDateTime.current?.value, sightLocation: userSightingLocation.current?.value,  ScientistEmail: userScientistEmail.current?.value, createAt: userCreateTime.current?.value, individual_id:userIndividualID.current?.value }
        console.log("Inside the component", userSighting);
        props.submit(userSighting);
       
    }

    return (
        <Form className='form-students' onSubmit={handleSubmit}>
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
            {/* <Form.Check
                type={'checkbox'}
                id={`isCurrent`}
                checked={student.is_current}
                onChange={handleCheckChange}
                label={`Is the animal healthy?`}
            /> */}
            <Form.Group>
            <button type="submit">Submit</button>
            </Form.Group>
        </Form>
    );
};


export default MyForm