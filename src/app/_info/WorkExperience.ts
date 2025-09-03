/**
 * Interface for work experiences.
 */
export interface WorkExperience {
  id: number;
  company: string;
  companyImage: string;
  position: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

/**
 * Static list of work experience.
 */
const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "Amazon",
    companyImage: "amazon_logo.jpeg",
    position: "Software Development Engineer II",
    location: "New York, New York",
    period: "Jun. 2022 - Dec. 2024",
    description:
      "Fullstack engineering work on internal tools to support Amazon's internal HR system.",
    responsibilities: [
      "Launched my org's first micro-frontend host platform, enabling 3+ domain teams to integrate full-page and in-page MFEs.",
      "Led AuthN/AuthZ infrastructure enhancements across European Works Council sites, expanding access in 34 of 38 regions.",
      "Coordinated a 2.5-month cross-team sprint to deliver a high-visibility React UI demo for leadership.",
      "Drove operational readiness review, improving error handling, alarms, and compliance before product launch.",
      "Stepped in as acting Senior Engineer, mentoring engineers and guiding technical direction.",
    ],
    technologies: [
      "Typescript",
      "Javascript",
      "React",
      "React Router",
      "Redux",
      "Webpack",
      "Api Gateway",
      "Cloudfront",
      "Lambda",
      "Route 53",
      "DynamoDB",
      "RDS",
    ],
  },
  {
    id: 2,
    company: "Amazon Web Services",
    companyImage: "amazon_web_services_logo.jpeg",
    position: "Software Development Engineer II",
    location: "Seattle, WA",
    period: "Oct. 2021 - Jun. 2022",
    description:
      "Mid Level Backend Engineer building infrastructure to support asynchronous apis for S3.",
    responsibilities: [
      "Designed and implemented the Sweeper component for S3’s Async API Engine to handle critical, time-sensitive workflows.",
      "Introduced checksumming in Async Engine Metadata Manager, improving durability and preventing corruption.",
      "Mentored engineers on integrating jobs into the Sweeper workflow, improving adoption and reliability.",
    ],
    technologies: [
      "Java",
      "JUnit",
      "Cron Job Distribution",
      "S3",
      "EC2",
      "DynamoDB",
      "SQS",
    ],
  },
  {
    id: 3,
    company: "Amazon Web Services",
    companyImage: "amazon_web_services_logo.jpeg",
    position: "Software Development Engineer I",
    location: "Seattle, WA",
    period: "July. 2019 - Oct. 2021",
    description:
      "Entry level Backend Engineer building infrastructure for S3 Lifecycle Transitions team.",
    responsibilities: [
      "Built the backend service for S3 Intelligent Tiering, processing 100K+ TPS and enabling new archive tiers.",
      "Designed the Iceidore Tier Down Worker, scaling workflows for petabyte-scale storage transitions.",
      "Enhanced test infrastructure (Iron Giant framework), reducing runtime from 85 hrs → 75 mins and cutting false alarms.",
      "Took on Scrum Master responsibilities, increasing team velocity by 20%.",
    ],
    technologies: ["Java", "JUnit Testing Framework"],
  },
  {
    id: 4,
    company: "Amazon Web Services",
    companyImage: "amazon_web_services_logo.jpeg",
    position: "Software Development Engineer Intern",
    location: "Seattle, WA",
    period: "May. 2018 - Aug. 2018",
    description:
      "Intern on the S3 Lifecycle Transitions Team. Resonsible for developing a Microservice to help deliver Glacier Restore Notifications",
    responsibilities: [
      "Worked on the Amazon Web Services S3 Lifecycle Transitions team in primarily Java to plan, design, and develop the backend implementation of S3 Restore Notifications.",
      "Collaborated with members of the lifecycle team, as well as held meetings with members of several other teams in collaboration, to create an overall timeline and duty list for all project members involved.",
      "All code was reviewed, perfected, and pushed to a testing environment before the conclusion of the internship.",
    ],
    technologies: ["Java", "JUnit Testing Framework", "AWS Kinesis"],
  },
  {
    id: 5,
    company: "Saber Astronautics",
    companyImage: "saber_astronautics_logo.jpeg",
    position: "Software Engineering Intern",
    location: "Sydney Australia 🦘",
    period: "May. 2017 - Jul. 2017",
    description:
      "Develop scripting support to parse application data that was previously manually calculated within excel.",
    responsibilities: [
      "Primarily used Octave to automate the parsing of hundreds of outputted application data files for which to supply statistics and data to potential customer inquiries.",
      "Expanded Octave scripting to simulate any desired constellation of satellite orbit simulation.",
      "Developed a search engine for Stellar Objects within the main company application.",
    ],
    technologies: ["Octave", "MatLab"],
  },
];

/**
 * Returns list of work experiences.
 */
function getWorkExperience(): WorkExperience[] {
  return workExperiences;
}

export default getWorkExperience;
