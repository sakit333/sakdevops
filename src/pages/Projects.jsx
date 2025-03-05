import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Projects = () => {
  const projects = [
    { title: "Project One", description: "A cool project about DevOps." },
    { title: "Project Two", description: "React app with Vite." },
  ];

  return (
    <Container className="mt-5">
      <h2>My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
