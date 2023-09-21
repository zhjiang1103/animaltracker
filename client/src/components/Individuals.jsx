import React from 'react';
import Card from 'react-bootstrap/Card';


const Individuals = (props) => {

console.log(props);

    return (
        <Card>
            <Card.Body>
            <Card.Title>{props.individuals.nickname}</Card.Title>
            <Card.Subtitle>Scientist Name: {props.individuals.scientistname}</Card.Subtitle>
            <Card.Text>
                <div>Species common name: {props.individuals.commonname}</div>
                <div>Species scientific name: {props.individuals.scientificname}</div>
           </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default Individuals