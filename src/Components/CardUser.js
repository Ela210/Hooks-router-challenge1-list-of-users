import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardUser = ({ users }) => {
  const navigate=useNavigate()
  return (
    <div style={{ flexWrap: "wrap", display: "flex" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={users.Image} />
        <Card.Body>
          <Card.Title>{users.name}</Card.Title>
          <Card.Text>{users.age}</Card.Text>
          <Card.Text>{users.Address}</Card.Text>
          <Button onClick={()=>navigate(`/Users/Description/${users.id}`)}>
            Address
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUser;
