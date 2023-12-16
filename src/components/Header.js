import React from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="flex items-center justify-between bg-slate-200 p-5 p-20 shadow-lg">
      <Container>
        {/* <Navbar.Brand href="#home">Bandage</Navbar.Brand> */}
        <Nav className=" flex items-center justify-center">
          <NavLink className="p-5 relative">Home</NavLink>
          <NavLink className="p-5 relative">Shop</NavLink>
          <NavLink className="p-5 relative">About</NavLink>
          <NavLink className="p-5 relative">Blog</NavLink>
          <NavLink className="p-5 relative">Contact</NavLink>
          <NavLink className="p-5 relative">Pages</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
