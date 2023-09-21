import React from 'react';
import Card from 'react-bootstrap/Card';


const Individuals = (props) => {

console.log("props", props);

    return (
        <Card>
       
            <Card.Body>
            <Card.Title>{`Individuals for species ${props.individual.commonname}`}</Card.Title>
            <Card.Text>
                <div>Individual nickname: {props.individual.nickname}</div>
                <div>Scientist Name: {props.individual.scientistname}</div>
           </Card.Text>
            </Card.Body>
       
        </Card>
    )

}

export default Individuals