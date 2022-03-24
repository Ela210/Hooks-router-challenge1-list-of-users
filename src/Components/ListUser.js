import React, { useState } from "react";
import Add from "./Add";
import { useNavigate } from 'react-router-dom';
import CardUser from "./CardUser";
import { UsersList } from "../Constant/Data";
import {Button} from "react-bootstrap";

const ListUser = ({ input }) => {
    let navigate=useNavigate()

  const [users, setUsers] = useState(UsersList);
  const addUser=(newUser)=>{
    setUsers([...users,newUser])
}
  return (
      <div>
    <Add addUser={addUser}/>
    <div style={{ display: "flex", height: "10px", justifyContent: "space-around",flexWrap: "wrap",}}>
       {users.filter(el=>el.name.toLowerCase().includes(input.toLowerCase())).map((user) => (
        <CardUser users={user} />
      ))}
    </div>
            <Button onClick={() => navigate(-1)}>Back</Button>
            </div>


  );
};

export default ListUser;
