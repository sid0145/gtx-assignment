import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { GlobalContext } from "../context/Globalstate";

const EditEmployee = (props) => {
  const [selectedEmpl, setSelectedEmpl] = useState({
    id: "",
    name: "",
  });
  const { employess, editEmployee } = useContext(GlobalContext);

  const history = useHistory();
  const currentId = props.match.params.id;

  useEffect(() => {
    const emplId = currentId;
    const selectedEmpl = employess.find((empl) => empl.id === emplId);
    setSelectedEmpl(selectedEmpl);
  }, [currentId, employess]);

  const onSubmit = () => {
    editEmployee(selectedEmpl);

    history.push("/");
  };

  const onChange = (e) => {
    setSelectedEmpl({ ...selectedEmpl, [e.target.name]: e.target.value });
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedEmpl.name}
          onChange={onChange}
          placeholder="enter name"
        ></Input>
      </FormGroup>
      <Button type="submit">Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default EditEmployee;
