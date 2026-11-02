export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  icon: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "fullstack-freelance",
    role: "Fullstack Developer",
    company: "Freelance",
    period: "Apr 2024 – Present",
    icon: "fas fa-laptop-code",
    description: [
      "End-to-end web application development for diverse clients using PHP/Laravel, Python (Django, Flask, FastAPI), TypeScript/React, and Node.js: client requirements gathering, architecture, development, and production deployments.",
      "Design and integration of REST APIs for reliable cross-system data exchange between client stacks.",
      "Maintenance, performance optimization, and technical client support for WordPress and custom web deployments."
    ],
    technologies: [
      "Python (FastAPI, Django, Flask)",
      "PHP / Laravel",
      "TypeScript / React",
      "Node.js",
      "REST APIs"
    ]
  },
  {
    id: "mobile-sonda",
    role: "Mobile Software Developer (Internship)",
    company: "Sonda S.A.",
    period: "Apr 2026 – Jun 2026",
    icon: "fas fa-mobile-alt",
    description: [
      "End-to-end development of mobile features integrated with backend services via RESTful APIs, applying Clean Architecture, SOLID principles, and the Repository pattern with BLoC/Cubit for state management.",
      "REST service integration via Dio, including interceptor configuration and strict separation between domain models and DTOs.",
      "Authored technical documentation (microservice specifications, UML diagrams) to support team coordination.",
      "Collaborative code reviews within an enterprise Git workflow on Bitbucket."
    ],
    technologies: [
      "Flutter / Mobile",
      "Clean Architecture",
      "BLoC / Cubit",
      "Dio & REST APIs",
      "SOLID",
      "Bitbucket / Git"
    ]
  },
  {
    id: "sysadmin-pcleaks",
    role: "Sysadmin",
    company: "PCLeaks",
    period: "Apr 2024 – Nov 2024",
    icon: "fas fa-server",
    description: [
      "Installation, provisioning, and maintenance of RHEL and Ubuntu Server systems for an educational computer lab.",
      "Automated repetitive software provisioning, configurations, and environment setups using custom Ansible playbooks."
    ],
    technologies: [
      "RHEL",
      "Ubuntu Server",
      "Ansible",
      "Sysadmin",
      "Automation"
    ]
  }
];

