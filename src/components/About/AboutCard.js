import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dagmawi Abera, </span>
            an <span className="purple"> Ethiopian-born</span> computer engineer, storyteller, and driven creator navigating life with relentless purpose.
            <br />
            I recently graduated with a Bachelor of Science in Computer Engineering. My journey has been anything but easy, balancing intense academics, multiple jobs, and creative pursuits, but it's exactly this journey that shaped who I am.
            <br />
            I am deeply passionate about technology, storytelling, and impact-driven work. Whether it's building smart systems, writing code that solves real problems, or scripting stories that move hearts, I see all of it as part of a greater mission: to transform ideas into action.
            <br />
            <br />
            Outside of engineering, I find joy in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing and storytelling — capturing emotions through books and film
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness and discipline — staying grounded physically and mentally
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the world — wandering both in place and in purpose
            </li>
            <li className="about-activity">
              <ImPointRight /> Aspiring content creation — sharing thoughts and perspectives that resonate
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "I wasn’t given comfort — I was given potential. And I intend to use it all!"{" "}
          </p>
          <footer className="blockquote-footer">Dagi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
