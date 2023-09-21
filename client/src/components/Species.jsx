import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
//import * as ioicons from 'react-icons/io5'

const Species = (props) => {
  

const fetchIndividuals = () =>{
    //localhost:8000/api/species/1
    const idToFetch = props.species.species_id;
    console.log("idtoFetch", idToFetch);
    props.onFetch(idToFetch);
    setSelectedSpeciesId(idToFetch); // Store the selected species ID in state
}

const handleReset = () =>{
    props.reset();
}
   
return (
        <Card>
            <Card.Body>
            <Card.Title>{props.species.commonname} </Card.Title>
            <Card.Subtitle>Scientific Name: {props.species.scientificname}</Card.Subtitle>
            <Card.Text>
                <div>Number in Wild: {props.species.numinwild}</div>
                <div>Code: {props.species.cscode}</div>
                <div>Record created at: {moment(props.species.createat).format('LLL')}</div>
           </Card.Text>
            <Button variant="outline-info" onClick={fetchIndividuals} style={{padding: '0.6em'}}>Get individuals</Button>
            <Button variant="outline-info" onClick={handleReset} style={{padding: '0.6em'}}>Reset</Button>
            </Card.Body>
        </Card>
    )

}

export default Species