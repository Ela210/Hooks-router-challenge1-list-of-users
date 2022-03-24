import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Add({ addUser }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //.......................//
  const [name, setName] = useState("User");
  const [Address, setAddress] = useState("Address");

  const [age, setAge] = useState("Age");

  const [Image, setImage] = useState("Image");
  const [Description, setDescription] = useState("Description");

  //..................................//
  const handlAdd = () => {
    addUser({ name, Address, Image, age, Description });
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="add user name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="age">Age</label>
          <input
            type="text"
            placeholder="add User Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="name">Address</label>
          <input
            type="text"
            placeholder="add user Address "
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            placeholder="add user photo "
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            placeholder="add user Description "
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlAdd}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Add;
