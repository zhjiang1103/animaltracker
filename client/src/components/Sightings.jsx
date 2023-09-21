import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
//import * as ioicons from 'react-icons/io5'

const Sightings = (props) => {

//console.log(props);
    return (
        <Card>
            {props.sightings.map((sighting)=>(
                <Card.Body>
                <Card.Title>Sighting: {sighting.sight_id} </Card.Title>
                <Card.Subtitle>Individual Nickname: {sighting.individualnickname}</Card.Subtitle>
                <Card.Text>
                    <div>Date & Time: {sighting.date_time}</div>
                    <div>Is it healthy?: {sighting.healthy.toString()}</div>
                    <div>Sighting Location: {sighting.sightlocation}</div>
               </Card.Text>
                </Card.Body>
            ))}
            
        </Card>
    )

}

export default Sightings