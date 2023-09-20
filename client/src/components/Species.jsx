import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Species = ({species}) => {

//     const onUpdate = (toUpdateStudent) => {
//         toUpdate(toUpdateStudent)
//     }

//     const onDelete = (toDeleteStudent) => {
//         toDelete(toDeleteStudent)
//     }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{species.commonname} </Card.Title>
            <Card.Subtitle>Scientific Name: {species.scientificname}</Card.Subtitle>
            <Card.Text>
            <div>Number in Wild: {species.numinwild}</div>
            <div>Code: {species.cscode}</div>
            <div>Record created at: {moment(species.createat).format('LLL')}</div>
          </Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default Species