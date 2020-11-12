import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="dark">
      <Container>
        <NavbarBrand href="/"> Employee List</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              Add Employee
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
