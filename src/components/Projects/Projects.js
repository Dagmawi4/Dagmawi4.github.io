import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Capacitor from "../../Assets/Projects/Capacitor.png";
import emotion from "../../Assets/Projects/emotion.png";
import Microstrip from "../../Assets/Projects/Microstrip.png";
import RAL from "../../Assets/Projects/RAL.png";
import suicide from "../../Assets/Projects/suicide.png";
import Smart from "../../Assets/Projects/Smart.jpg";

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
              imgPath={RAL}
              isBlog={false}
              title="RAL Turret Loader Upgrade"
              description="Designed and implemented a major hardware and software upgrade for the RAL production line's core feeder system. The project involved replacing outdated electrical components with a new control panel using an Allen Bradley Micro820 PLC and an IFM safety controller. I developed a complete PLC program structured into modular sequences—Initialize, Main_IO, Bowl_Feeder, Core_Transport, and Core_Rotate_Load to ensure smooth automated operation. The upgraded system integrates a belted conveyor with the existing bowl feeder and includes field wiring, HMI layout, and VFD control. This upgrade significantly improves process efficiency, reduces downtime, and simplifies long-term maintenance."
              ghLink="https://github.com/Dagmawi4/RAL-Turret-Loader-Upgrade-Senior-Design-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smart}
              isBlog={false}
              title="Smart Mirror"
              description="Built a fully functional Smart Mirror using Raspberry Pi and the MagicMirror² framework. Integrated real-time modules for weather, date/time, and Google Calendar synchronization using API calls. Developed backend scripts in Python and Node.js to manage dynamic content updates. Configured a headless setup using SSH for remote deployment and maintenance, optimizing performance for a seamless user experience."
              ghLink="https://github.com/Dagmawi4/Smart-Mirror-Junior-Design-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Microstrip}
              isBlog={false}
              title="Microstrip Line Crosstalk Modeling with HFSS and Python"
              description="Modeled and analyzed microstrip line crosstalk using ANSYS HFSS for high-frequency signal integrity simulations. Designed PCB structures and extracted S-parameters to evaluate electromagnetic interference. Used Python to process and visualize simulation data, enabling deeper insight into near-end and far-end crosstalk behavior across different spacing and layout configurations."
              ghLink="https://github.com/Dagmawi4/signal-and-power-integrity-projects/tree/main/Project%202%3A%20Microstrip%20Line%20Crosstalk%20Modeling%20with%20HFSS%20and%20Python"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capacitor}
              isBlog={false}
              title="High-Frequency Capacitor Modeling with HFSS"
              description="Simulated and modeled a metal-ceramic-metal capacitor on a high-frequency PCB using ANSYS HFSS. Investigated impedance behavior and resonant frequency across GHz ranges, incorporating real-world material properties like Rogers 4003C substrate. Analyzed electric field distribution, capacitance, and S-parameters to assess performance in RF environments."
              ghLink="https://github.com/Dagmawi4/signal-and-power-integrity-projects/tree/main/Project%201%3A%20Metal-Ceramic-Metal%20Capacitor%20on%20Rogers%204003C%20Substrate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
