import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';


const Sightings = (props) => {


    return (
        <Card>
            
                <Card.Body>
                <Card.Title>Individual Nickname: {props.sightings.individualnickname}</Card.Title>
                <Card.Text>
                    <div>Date & Time: {props.sightings.date_time}</div>
                    <div>Is it healthy?: {props.sightings.healthy.toString()}</div>
                    <div>Sighting Location: {props.sightings.sightlocation}</div>
               </Card.Text>
                </Card.Body>
            
            
        </Card>
    )

}

export default Sightings