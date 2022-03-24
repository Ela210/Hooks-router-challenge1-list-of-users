import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UsersList } from "../Constant/Data";

const Description = () => {
  const params = useParams();
  const navigate = useNavigate();
  const about = UsersList.find((el) => el.id == params.id);
  console.log(params.id);
  return (
    <div>
      <h5>{about.Address}</h5>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default Description;
