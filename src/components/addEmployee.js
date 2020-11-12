import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

import { GlobalContext } from "../context/Globalstate";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const { addEmployee } = useContext(GlobalContext);

  const history = useHistory();

  const onSubmit = () => {
    const newEmployee = {
      id: uuid(),
      name: name,
    };
    addEmployee(newEmployee);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="enter name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddEmployee;
