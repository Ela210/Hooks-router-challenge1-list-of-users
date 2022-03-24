import React, { useState } from "react";
import ListUser from "./ListUser";
import { Form } from "react-bootstrap";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div>
      <Form.Control
        type="nom"
        placeholder="Search by name "
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <ListUser input={search} />
    </div>
  );
};

export default Search;
