// src/components/Experience/Experience.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

const EXPERIENCES = [
  {
    role: "Systems Application Engineer & PM Intern",
    company: "Johnson & Johnson",
    companyLink: "https://www.jnj.com/",
    period: "Jun 2025 – Aug 2025",
    location: "Raritan, NJ · On-site",
    bullets: [
      "Supported migration of SAP systems to AWS, optimizing cloud infrastructure and data flows.",
      "Built Power BI dashboards to visualize global system updates and user access metrics.",
      "Collaborated across engineering, product, and IT teams to drive digital transformation.",
      "Worked in agile sprints, managing cross-functional deliverables using Jira and ServiceNow."
    ],
    tech: ["SAP", "AWS", "Power BI", "Jira", "ServiceNow"],
  },
  {
    role: "Electrical Controls Engineer",
    company: "Taylor Corporation – Contract",
    companyLink: "https://www.taylor.com/",
    period: "Aug 2024 – May 2025",
    location: "North Mankato, MN · Hybrid",
    bullets: [
      "Led end-to-end upgrade of a RAL turret core feeder system with Taylor Corporation.",
      "Replaced a legacy manual control with a fully automated Allen-Bradley PLC-based solution.",
      "Designed modular ladder logic in Connected Components Workbench (CCW) for sensor-driven step sequencing.",
      "Built and wired an industrial control panel with AutoCAD Electrical (power, safety relays, indicators).",
      "Integrated pneumatics, vacuum components, and safety interlocks for reliable, fault-tolerant operation.",
    ],
    tech: ["Allen-Bradley PLC", "CCW", "AutoCAD Electrical", "Industrial Controls"],
  },
  {
    role: "Electronics Engineering Intern",
    company: "Thin Film Technology Corporation",
    companyLink: "https://www.tftcorp.com/",
    period: "May 2023 – May 2025",
    location: "North Mankato, MN · On-site",
    bullets: [
      "Assisted design/prototyping of passive components (resistors, capacitors, inductors).",
      "Executed comprehensive testing using advanced measurement techniques to validate quality standards.",
      "Collaborated with senior engineers to troubleshoot issues during development, reducing turnaround time.",
      "Contributed insights from testing outcomes to improve design and manufacturing processes.",
    ],
    tech: ["Electronics Test", "Measurement", "Quality", "R&D"],
  },
  {
    role: "IT Intern",
    company: "Thin Film Technology Corporation",
    companyLink: "https://www.tftcorp.com/",
    period: "Jan 2023 – May 2023",
    location: "North Mankato, MN · On-site",
    bullets: [
      "Scheduled weekly laptop maintenance; debugged hardware/software; monitored systems.",
      "Resolved helpdesk tickets; configured devices and workstations; supported end users.",
      "Patched OS/software; reduced lag time and improved overall speed.",
      "Maintained servers/systems for reliable operation; delivered monthly cybersecurity tips.",
    ],
    tech: ["Helpdesk", "Windows Admin", "Networking", "Cybersecurity Awareness"],
  },
  {
    role: "Qualcomm Student Accelerator",
    company: "Qualcomm",
    companyLink: "https://www.qualcomm.com/",
    period: "Sep 2024",
    location: "San Diego, CA · On-site",
    bullets: [
      "Selected for competitive 3-day program at Qualcomm HQ.",
      "Participated in technical workshops, project collaboration, and hands-on demos with engineers.",
      "Gained exposure to embedded systems, signal processing, and wireless technologies.",
    ],
    tech: ["Embedded", "Signal Processing", "Wireless"],
  },
  {
    role: "President",
    company: "IEEE Student Branch · Minnesota State University, Mankato",
    companyLink: "https://www.mnsu.edu/",
    period: "May 2023 – Aug 2024",
    location: "Mankato, MN · On-site",
    bullets: [
      "Chaired the branch; increased membership by 60% in 4 months; led 20+ technical events.",
      "Built industry partnerships for knowledge exchange and internships; secured $20k+ in grants/sponsorships.",
      "Launched mentorship/tutoring programs; improved visibility via outreach and social media.",
    ],
    tech: ["Leadership", "Program Management", "Community"],
  },
  {
    role: "Treasurer",
    company: "IEEE Student Branch · Minnesota State University, Mankato",
    companyLink: "https://www.mnsu.edu/",
    period: "Apr 2022 – May 2023",
    location: "Mankato, MN · On-site",
    bullets: [
      "Managed statements, invoices, and expense accounts; maintained accurate records.",
      "Advised spending decisions to keep operations within budget; planned annual budgets.",
      "Handled due-diligence and discrepancy investigations to maintain optimal controls.",
    ],
    tech: ["Budgeting", "Finance Ops"],
  },
  {
    role: "Campus Security Student Lead Officer",
    company: "Minnesota State University, Mankato",
    companyLink: "https://www.mnsu.edu/",
    period: "Nov 2022 – Apr 2025",
    location: "Mankato, MN · On-site",
    bullets: [
      "Led campus patrols and incident response to maintain safety for staff, students, and visitors.",
      "Documented incidents, enforced parking regulations, and coordinated with police/fire/EMS.",
      "Maintained training and professional development on security procedures/technologies.",
    ],
    tech: ["Operations", "Incident Response"],
  },
  {
    role: "Campus Security Student Patrol Officer",
    company: "Minnesota State University, Mankato",
    companyLink: "https://www.mnsu.edu/",
    period: "Aug 2022 – Nov 2022",
    location: "Mankato, MN · On-site",
    bullets: [
      "Patrolled in vehicle and on foot; identified safety/security issues.",
      "Handled radio/telephone communications; guided visitors across campus.",
      "Prepared for emergencies with CPR and AED certifications.",
    ],
    tech: ["Safety", "Customer Service"],
  },
  {
    role: "Nspire – Software Engineering Corp Intern",
    company: "Nordstrom",
    companyLink: "https://www.nordstrom.com/",
    period: "Aug 2023",
    location: "Seattle, WA · On-site",
    bullets: [
      "Enhanced search engine efficiency; enabled precise filtering for niche items.",
      "Collaborated with engineers/data scientists; integrated AI-driven filtering.",
      "Solved programming challenges in a fast-paced environment.",
    ],
    tech: ["Python", "AI/ML", "Search"],
  },
  {
    role: "Delegate – UNICEF Ethiopia",
    company: "Asia World Model United Nations",
    period: "May 2023",
    location: "Bangkok, Thailand · On-site",
    bullets: [
      "Represented Ethiopia at AWMUN V; debated global issues with international delegates.",
      "Contributed to UNICEF council on educational technology transformation.",
      "Helped author final draft resolution; participated in cultural exchange.",
    ],
    tech: ["Debate", "Leadership", "Public Speaking"],
  },
  {
    role: "Millennium FinTech Challenge",
    company: "Millennium",
    period: "Apr 2023",
    location: "Miami, FL · On-site",
    bullets: [
      "Built data-driven investment strategies using real-world asset data.",
      "Modeled portfolios in Python/Jupyter; optimized Sharpe ratio via iterative allocation.",
      "Analyzed news/economic indicators to inform risk-aware decisions.",
    ],
    tech: ["Python", "Pandas/NumPy", "SciPy", "Quant Finance"],
  },
  {
    role: "Crypto Gaming Market Research & Data Analyst Intern",
    company: "Mobalytics",
    companyLink: "https://mobalytics.gg/",
    period: "Feb 2023 – Apr 2023",
    location: "California, United States · Remote",
    bullets: [
      "Conducted P2E market analysis; recommended monetization and product strategies.",
      "Built Tableau dashboards; presented insights to Paragon One and Mobalytics teams.",
      "Explored Web3 use-cases (smart contracts, NFTs, decentralized apps).",
    ],
    tech: ["SQL", "Tableau", "Web3"],
  },
  {
    role: "College of Science, Engineering & Technology Senator",
    company: "Student Government · Minnesota State Mankato",
    period: "Apr 2022 – Apr 2023",
    location: "Mankato, MN · On-site",
    bullets: [
      "Acted as liaison to university administration for engineering/technology students.",
      "Addressed departmental issues; improved student motivation and problem solving.",
    ],
    tech: ["Strategic Thinking", "Project Management"],
  },
  {
    role: "Delegate – UNESCO (Belgium)",
    company: "Asia World Model United Nations",
    period: "Nov 2019",
    location: "Bali, Indonesia · On-site",
    bullets: [
      "Drafted a position paper and collaborated on a working paper with delegates.",
      "Analyzed legislative issues and proposed solutions aligned with committee goals.",
    ],
    tech: ["Diplomacy", "Public Speaking"],
  },
  {
    role: "Training Assistant",
    company: "Ethiopian Space Science Society",
    period: "May 2019 – Sep 2019",
    location: "Addis Ababa, Ethiopia · On-site",
    bullets: [
      "Supported software/hardware courses in summer school program.",
      "Assisted telescope operations and astronomy software training.",
      "Taught basic engineering/programming to expand youth opportunities.",
    ],
    tech: ["STEM Education", "Astronomy", "Programming Basics"],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section" id="experience">
      <Container className="py-4" style={{ maxWidth: "1000px" }}>
        <h1 className="project-heading text-center mb-3">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p
          className="text-center text-secondary mb-4"
          style={{ fontSize: "1.05rem" }}
        >
          Roles, leadership, and projects that shaped my engineering journey.
        </p>

        <Row className="g-4">
          {EXPERIENCES.map((exp, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <ExperienceCard {...exp} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;


