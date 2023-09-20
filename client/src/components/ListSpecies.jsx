import React, { useState, useEffect } from 'react'
//import * as ioicons from 'react-icons/io5'
//import MyForm from './Form';
import Species from './Species';

const ListSpecies = () => {

    // this is my original state with an array of students 
    const [species, setSpecies] = useState([]);
    const [individualsForEach, setIndividualsForEach] = useState([]);

    //this is the state needed for the UpdateRequest
    //const [editingStudent, setEditingStudent] = useState(null)

    const loadSpecies = () => {
        // A function to fetch the list of species that will be load anytime that list change
        fetch("http://localhost:8000/api/species")
            .then((response) => response.json())
            .then((result) => {
                setSpecies(result);
                //
            });
    }

    useEffect(() => {
        loadSpecies();
        console.log("fetching", species);
    }, []);


    const IndividualsForEachSpecies = (speciesId) =>{
        if (speciesId) {
            // A function to fetch the list of individuals for each species that will be load anytime that list changes
            fetch(`http://localhost:8000/api/species/${speciesId}`)
              .then((response) => response.json())
              .then((result) => {
                setIndividualsForEach(result);
                //console.log("fetching individuals For Each species", individualsForEach);
              });
          } else {
            console.error("Invalid speciesId:", speciesId);
          }
    }
    useEffect(() => {
            IndividualsForEachSpecies();
            console.log("fetching individuals For Each species", individualsForEach);
    }, []);

   // const onSaveStudent = (newStudent) => {
        //console.log(newStudent, "From the parent - List of Students");
       // setStudents((students) => [...students, newStudent]);
    //}


    //A function to control the update in the parent (student component)
  //  const updateStudent = (savedStudent) => {
        // console.log("Line 29 savedStudent", savedStudent);
        // This function should update the whole list of students - 
  //      loadStudents();
  //  }

    //A function to handle the Delete funtionality
   // const onDelete = (student) => {
        //console.log(student, "delete method")
    //    return fetch(`http://localhost:8080/api/species/${speciesId}`, {
           // method: "DELETE"
    //    }).then((response) => {
            //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    // //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);

    // }



    return (
        <div className="mybody">
        <div className="list-students">
            <h2>Animal Tracker </h2>
            <ul>
                {species.map((species) => {
                    return <li key={species.id}> <Species species={species} onFetch={IndividualsForEachSpecies} /></li>
                })}
            </ul>
        </div>
        {/* <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}
        </div>
    );
}


export default ListSpecies