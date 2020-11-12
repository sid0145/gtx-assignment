import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import { GlobalContext } from "../context/Globalstate";

const EmployeeList = () => {
  const { employess, removeEmployee } = useContext(GlobalContext);
  console.log(employess);
  return (
    <ListGroup className="mt-4">
      {employess.length > 0 ? (
        <>
          {employess.map((employee) => (
            <ListGroupItem className="d-flex" key={employee.id}>
              <strong>{employee.name}</strong>
              <div className="ml-auto">
                <Link
                  className="btn btn-warning mr-1"
                  to={`/edit/${employee.id}`}
                >
                  Edit
                </Link>
                <Button
                  color="danger"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center"> No employess Found</h4>
      )}
    </ListGroup>
  );
};

export default EmployeeList;
