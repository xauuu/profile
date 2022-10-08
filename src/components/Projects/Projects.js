import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop from "../../Assets/Projects/shop.png";
import whiteboard from "../../Assets/Projects/whiteboard.png";
import editor from "../../Assets/Projects/editor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop Blue"
              description="Fashion e-commerce website built with Laravel. Allows users to search, add products to cart and place orders."
              ghLink="https://github.com/xauuu/shop-blue"
              demoLink="https://shop-blue.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteboard}
              isBlog={false}
              title="WhiteBoard"
              description="Whiteboard app for sharing ideas and hanging out with friends is built with React.js. There are features that allow users for realtime drawing, share images as well as support reacting on messages."
              ghLink="https://github.com/xauuu/whiteboard"
              demoLink="https://whiteboard.xauu.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Image Editor"
              description="Online Image Editor built with React.js. It covers various free online photo editing tools, so you can crop images, resize images, add text to photos, and create graphic designs easily."
              ghLink="https://github.com/xauuu/image-editor-app"
              demoLink="https://editor.xauu.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
