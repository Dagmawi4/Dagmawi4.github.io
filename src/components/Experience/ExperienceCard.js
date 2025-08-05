// src/components/Experience/ExperienceCard.js

import React from "react";
import { Card, Badge } from "react-bootstrap";
import { GoCalendar, GoLocation } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import "./ExperienceCard.css";

export default function ExperienceCard({
  role,
  company,
  companyLink,
  period,
  location,
  bullets = [],
  tech = [],
}) {
  return (
    <Card className="project-card-view h-100">
      <Card.Body className="d-flex flex-column p-3">
        {/* Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-start mb-2">
          <div>
            <Card.Title className="mb-0" style={{ fontSize: "1.05rem" }}>
              <strong>{role}</strong>{" "}
              <span className="purple">|</span>{" "}
              {companyLink ? (
                <a
                  href={companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="purple text-decoration-none"
                  title="Company website"
                >
                  {company} <FiExternalLink />
                </a>
              ) : (
                <span className="purple">{company}</span>
              )}
            </Card.Title>
          </div>
          <div className="text-muted small d-flex flex-wrap gap-2">
            {period && (
              <span title="Period">
                <GoCalendar /> {period}
              </span>
            )}
            {location && (
              <span title="Location">
                <GoLocation /> {location}
              </span>
            )}
          </div>
        </div>

        {/* Bullets */}
        {bullets.length > 0 && (
          <ul className="experience-bullets mb-3 flex-grow-1">
            {bullets.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        )}

        {/* Tech badges */}
        {tech.length > 0 && (
          <div className="mt-auto d-flex flex-wrap">
            {tech.map((t, idx) => (
              <Badge pill bg="secondary" key={idx} className="me-2 mb-2 tech-badge">
                {t}
              </Badge>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
