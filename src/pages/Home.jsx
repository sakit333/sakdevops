import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-primary text-white text-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} md={10} sm={12} className="mx-auto">
            <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
            <p className="lead">
              I'm a passionate <span className="fw-bold text-warning">Developer</span>.  
              Explore my work below.
            </p>
            <Button variant="light" href="/sakdevops/projects" className="btn-lg fw-bold mt-3">
              View Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
