/**
 * Interface for work experiences.
 */
export interface WorkExperience {
    id: number,
    company: string,
    companyImage: string,
    position: string,
    location: string,
    period: string,
    description: string,
    responsibilities: string[],
    technologies: string[],
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
        description: "Fullstack engineering work on internal tools to support Amazon's internal HR system.",
        responsibilities: [
            "Launched first micro-frontend host platform, onboarding three frontend services. Guided away " +
            "teams in development and integration of full page and in-page MFEs.",
            "Guided application process through Works Council approvals. Collaborated with away team " +
            "to develop organization-wide enhancements for AuthN and AuthZ. Enabled additional users in " +
            "34 of 38 European Works Council site buckets prior to leave. Focused on supporting partial " +
            "Works Council approvals with targeted feature improvements.",
            "Led frontend infrastructure and React UI development in a two-and-a-half-month sprint to " +
            "showcase product to leadership by end of 2023 development cycle. Coordinated efforts with " +
            "two teams to evaluate feasible deliverables in the given timeframe. Negotiated with product " +
            "stakeholders to adjust project requirements based on engineering capacity.",
            "Conducted an operational readiness review of the core application pre-launch. Provided " +
            "critical insights into error handling, alarming protocols, and HR-PII data compliance. Rectified " +
            "issues identified to guarantee a smooth product launch."
        ],
        technologies: ["Typescript", "Javascript", "React", "Webpack", "Api Gateway", "Cloudfront", "Lambda", "Route 53", "DynamoDB", "RDS"]
    },
    {
        id: 2,
        company: "Amazon Web Services",
        companyImage: "amazon_web_services_logo.jpeg",
        position: "Software Development Engineer II",
        location: "Seattle, WA",
        period: "Oct. 2021 - Jun. 2022",
        description: "Mid Level Backend Engineer building infrastructure to support asynchronous apis for S3.",
        responsibilities: [
            "Designed and implemented Sweeper component to enhance S3's Async API Engine " +
            "functionality. Developed component to discover and execute three critical time-sensitive operations.",
            "Guided two engineers in integrating two new jobs into workflow enhanced by S3 Async API Engine Sweeper data corruption.",
            "Introduced checksumming to S3 Async Engine Metadata Manager component. " +
            "Ensuring data integrity during transmission to mitigate potential durability issues within service.",
        ],
        technologies: ["Java", "Cron Job Distribution", "EC2", "DynamoDB", "SQS"]
    },
    {
        id: 3,
        company: "Amazon Web Services",
        companyImage: "amazon_web_services_logo.jpeg",
        position: "Software Development Engineer I",
        location: "Seattle, WA",
        period: "July. 2019 - Oct. 2021",
        description: "Entry level Backend Engineer building infrastructure for S3 Lifecycle Transitions team.",
        responsibilities: [
            "Led design, planning, and implementation of a backend service to support the addition of archive tiers to Intelligent Tiering within S3.",
            "Handled customer-impacting issues as part of team on-call rotation.",
            "Assumed the role of Scrum Master to iterate and improve upon the team's implementation of Scrum methodology.",
        ],
        technologies: ["Java", "JUnit Testing Framework"]
    },
    {
        id: 4,
        company: "Amazon Web Services",
        companyImage: "amazon_web_services_logo.jpeg",
        position: "Software Development Engineer Intern",
        location: "Seattle, WA",
        period: "May. 2018 - Aug. 2018",
        description: "Intern on the S3 Lifecycle Transitions Team. Resonsible for developing a Microservice to help deliver Glacier Restore Notifications",
        responsibilities: [
            "Worked on the Amazon Web Services S3 Lifecycle Transitions team in primarily Java to plan, design, and develop the backend implementation of S3 Restore Notifications.",
            "Collaborated with members of the lifecycle team, as well as held meetings with members of several other teams in collaboration, to create an overall timeline and duty list for all project members involved.",
            "All code was reviewed, perfected, and pushed to a testing environment before the conclusion of the internship.",
        ],
        technologies: ["Java", "JUnit Testing Framework", "AWS Kinesis"]
    },
    {
        id: 5,
        company: "Saber Astronautics",
        companyImage: "saber_astronautics_logo.jpeg",
        position: "Software Engineering Intern",
        location: "Sydney Australia 🦘",
        period: "May. 2017 - Jul. 2017",
        description: "Develop scripting support to parse application data that was previously manually calculated within excel.",
        responsibilities: [
            "Primarily used Octave to automate the parsing of hundreds of outputted application data files for which to supply statistics and data to potential customer inquiries.",
            "Expanded Octave scripting to simulate any desired constellation of satellite orbit simulation.",
            "Developed a search engine for Stellar Objects within the main company application.",
        ],
        technologies: ["Octave", "MatLab"]
    },
];

/**
 * Returns list of work experiences.
 */
function getWorkExperience(): WorkExperience[] {
    return workExperiences;
}

export default getWorkExperience;
