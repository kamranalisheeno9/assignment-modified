import React,{useState} from 'react';
import {Card,ListGroup,Button} from 'react-bootstrap'
function CardData(props) {

    return (
        <>
            <Card style={{ width: '12rem',margin:'10px' }}>
  <ListGroup variant="dark">
    <ListGroup.Item style={{color:"black",textTransform:"uppercase"}}> {props.data.exchange_id}</ListGroup.Item>
    <ListGroup.Item style={{color:"blue",textTransform:"uppercase"}}> {props.data.symbol}</ListGroup.Item>
    <ListGroup.Item style={{color:"red",textTransform:"uppercase"}}> {props.data.base_asset}</ListGroup.Item>
    <ListGroup.Item style={{color:"gray"}}> {props.data.price}</ListGroup.Item>
    <Button variant="dark" onClick={props.removeFunc} style={{width:"90%",margin:"5px auto"}}>Delete</Button>
    <Button variant="danger" onClick={props.updateItem} style={{width:"90%",margin:"5px auto"}}>Update</Button>
  </ListGroup>
</Card>
          
        </>
    );
}

export default CardData;