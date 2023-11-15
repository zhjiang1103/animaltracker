import React, { useState, useEffect } from 'react'
import MyForm from './Form';
import Species from './Species';
import Sightings from './Sightings';
import Individuals from './Individuals';

const ListSpecies = () => {

    // this is my original state with an array of students 
    const [species, setSpecies] = useState([]);
    const [individualsForEach, setIndividualsForEach] = useState([]);
    const [sightings, setSightings] = useState([]);

    

    const loadSpecies = () => {
        // A function to fetch the list of species that will be load anytime that list change
        fetch("http://localhost:8000/api/species")
            .then((response) => response.json())
            .then((result) => {
                setSpecies(result);
                //
            });
    }

   


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
        fetch("http://localhost:8000/api/sightingsjoinnickname")
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
        //console.log("Inside the App", data);
      fetch("http://localhost:8000/api/sightings", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSighting)
      })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let createSighting = result;
        console.log("Inside the post line 88", createSighting)
        //setSightings([...sightings, createSighting])
        loadSightings();
        console.log("newSightings", sightings);
      })
      .catch((error) => {
        console.error("Error while saving the sighting:", error);
      });
  }



    

    return (
        <div className="container">
        <div className="list-students">
            <h2>Animal Tracker </h2>
            <ul>
                {species.map((species) => {
                    return <li key={species.id}> <Species species={species} onFetch={IndividualsForEachSpecies} /></li>
                })}
            </ul>
            <h2>All Sightings</h2>
            <ul>
            {sightings.map((sighting) => {
                    return <li key={sighting.id}> <Sightings sightings={sighting} /></li>
                })}
            </ul>
            <ul>
                {individualsForEach.length === 0  ? null : individualsForEach.map((individual) => {
                    return <li key={individual.id}> <Individuals individual={individual} reset={resetIndividuals}/></li>
                })}
            </ul>
        </div>
        <MyForm submit={onSaveSighting} />
        </div>
    );
}


export default ListSpecies