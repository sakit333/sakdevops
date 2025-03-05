import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="text-white text-center py-3">
      <Container>
        <span className="mx-auto">© 2024 My Portfolio | All Rights Reserved</span>
      </Container>
    </Navbar>
  );
};

export default Footer;
