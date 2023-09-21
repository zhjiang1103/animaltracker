import React, { useState, useEffect } from 'react'
//import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Species from './Species';
import Sightings from './Sightings';
import Individuals from './Individuals';

const ListSpecies = () => {

    // this is my original state with an array of students 
    const [species, setSpecies] = useState([]);
    const [individualsForEach, setIndividualsForEach] = useState([]);
    const [sightings, setSightings] = useState([]);

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

    // useEffect(() => {
    //     loadSpecies();
    //     console.log("fetching species", species);
    // }, []);


    const IndividualsForEachSpecies = (speciesId) =>{
        if (speciesId) {
            // A function to fetch the list of individuals for each species that will be load anytime that list changes
            fetch(`http://localhost:8000/api/species/${speciesId}`)
              .then((response) => response.json())
              .then((result) => {
                setIndividualsForEach(result);
                console.log("fetching individuals For Each species", individualsForEach);
              });
          } else {
            console.error("Invalid speciesId:", speciesId);
          }
    }

    const resetIndividuals = () =>{
        setIndividualsForEach([]);
    }
    
    useEffect(() => {
            IndividualsForEachSpecies();
            console.log("fetching individuals For Each species", individualsForEach);
    }, [individualsForEach]);


    const loadSightings = () => {
        fetch("http://localhost:8000/api/sightings")
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            setSightings(result);
            console.log("fetching sightings", result);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
      
    useEffect(() => {
        loadSpecies();
        loadSightings();
        console.log("fetching species", species);
        console.log("fetching sightings", sightings);
    }, []);

   const onSaveSighting = (newSighting) => {
        console.log(newSighting, "From the parent - Sightings");
       setSightings((sightings) => [...sightings, newSighting]);
    }


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
            <ul>
            {sightings.map((sighting) => {
                    return <li key={sighting.id}> <Sightings sightings={sightings} /></li>
                })}
            </ul>
            <div>
                {individualsForEach.length === 0  ? null : <Individuals individuals={individualsForEach} reset={resetIndividuals}/>}
            </div>
        </div>
        <MyForm submit={onSaveSighting} />
        </div>
    );
}


export default ListSpecies