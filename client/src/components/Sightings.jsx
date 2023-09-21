import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
//import * as ioicons from 'react-icons/io5'

const Sightings = (props) => {

//console.log(props);
    return (
        <Card>
            
                <Card.Body>
                <Card.Title>Sighting: {props.sightings.sight_id} </Card.Title>
                <Card.Subtitle>Individual Nickname: {props.sightings.individualnickname}</Card.Subtitle>
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