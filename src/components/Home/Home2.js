import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Dagi-Avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMediumCircle,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa"; // For Linktree (since there's no official Linktree icon)

function Home2() {
  return (
<Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          A BIT<span className="purple"> ABOUT </span> ME
        </h1>
        <p className="home-about-body">
          I’m someone who’s constantly exploring — through code, design, and storytelling.
          <br />
          <br />
          I enjoy building things that are not just functional, but meaningful.  
          Whether it’s a product, a project, or a creative idea,  
          I like bringing structure to what starts as just a spark.
          <br />
          <br />
          My interests span across
          <i>
            <b className="purple"> technology, design, writing, and systems thinking, </b>
          </i>
          and I’m always learning how to connect them in powerful ways.
          <br />
          <br />
          Above all, I’m driven by purpose — I want to create things that reflect who I am  
          and leave the world a little better than I found it.
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
    <Row>

          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dagmawi4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dagmawi-abera/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dagi.wanders/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@dagiwanders"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://medium.com/@dagiwanders"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linktr.ee/dagiwanders"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLink />
                </a>
              </li>
            </ul>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
