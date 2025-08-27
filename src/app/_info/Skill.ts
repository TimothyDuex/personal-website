import {
  NextJs,
  React,
  Redux,
  ReactRouter,
  TypeScript,
  JavaScript,
  Jest,
  TailwindCSS,
  HTML5,
  CSS3,
  Webpack,
  ESLint,
  Prettier,
  Figma,
  NodeJs,
  Java,
  EC2,
  GraphQL,
  PostgreSQL,
  AWS,
  Redis,
  Supabase,
  Postman,
  Git,
  NPM,
} from "developer-icons";
import { SVGProps } from "react";

interface DeveloperIconProps extends Partial<SVGProps<SVGElement>> {
  size?: number;
}

interface Skill {
  name: string;
  icon: React.FC<DeveloperIconProps>;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: React, url: "https://react.dev" },
      { name: "Redux", icon: Redux, url: "https://redux.js.org" },
      { name: "React Router", icon: ReactRouter, url: "https://redux.js.org" },
      { name: "Next.js", icon: NextJs, url: "https://nextjs.org" },
      {
        name: "TypeScript",
        icon: TypeScript,
        url: "https://typescriptlang.org",
      },
      {
        name: "JavaScript",
        icon: JavaScript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "Jest", icon: Jest, url: "https://jestjs.io" },
      {
        name: "Tailwind CSS",
        icon: TailwindCSS,
        url: "https://tailwindcss.com",
      },
      {
        name: "HTML5",
        icon: HTML5,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: CSS3,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "Webpack",
        icon: Webpack,
        url: "https://webpack.js.org",
      },
      { name: "ESLint", icon: ESLint, url: "https://eslint.org" },
      { name: "Prettier", icon: Prettier, url: "https://prettier.io" },
      { name: "Figma", icon: Figma, url: "https://www.figma.com" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodeJs, url: "https://nodejs.org" },
      { name: "Java", icon: Java, url: "https://oracle.com/java" },
      { name: "EC2", icon: EC2, url: "https://aws.amazon.com/ec2/" },
      { name: "GraphQL", icon: GraphQL, url: "https://graphql.org" },
      { name: "PostgreSQL", icon: PostgreSQL, url: "https://postgresql.org" },
      {
        name: "DynamoDB",
        icon: AWS,
        url: "https://aws.amazon.com/dynamodb",
      },
      { name: "Redis", icon: Redis, url: "https://redis.io" },
      { name: "Supabase", icon: Supabase, url: "https://supabase.com" },
      { name: "AWS", icon: AWS, url: "https://aws.amazon.com" },
      { name: "Postman", icon: Postman, url: "https://www.postman.com" },
      { name: "Git", icon: Git, url: "https://github.com" },
      { name: "NPM", icon: NPM, url: "https://www.npmjs.com" },
    ],
  },
];

function getSkills(): SkillCategory[] {
  return skillCategories;
}

export default getSkills;
