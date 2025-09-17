import React from "react";

function ProfessionalSummary() {
  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        Professional Mission
      </h2>

      <div className="md:col-span-2 rounded-2xl">
        {/* TODO: Add back once implemented caching solution for TTS */}
        {/* <SmartListenableText className="prose max-w-none" as="div"> */}
        <p className="adaptive-text-body adaptive-text-body-line-height adaptive-margin-bottom-general">
          I am a Software Engineer with 5+ years of experience at Amazon and
          AWS, where I built and scaled distributed systems, developer
          platforms, and customer-facing applications used at massive scale. My
          expertise spans backend engineering (Java, Node.js, AWS, DynamoDB,
          PostgreSQL) and frontend development (React, Next.js, TypeScript,
          Tailwind CSS), with a strong track record of launching reliable,
          high-performance services and improving developer productivity.
        </p>

        <p className="adaptive-text-body adaptive-text-body-line-height adaptive-margin-bottom-general">
          Beyond engineering, I’m passionate about music, health, and
          productivity, both as personal pursuits and as areas where technology
          can create meaningful impact. I’m excited to bring my skills in
          scalable systems, product engineering, and user experience into
          opportunities that sit at the intersection of tech, music, and health.
          Building products that inspire creativity, performance, and
          well-being.
        </p>

        <p className="adaptive-text-body adaptive-text-body-line-height adaptive-margin-bottom-general">
          Feel free to connect with me to discuss opportunities where I can
          leverage my technical skills and passions to create impactful and
          creative solutions.
        </p>
        {/* </SmartListenableText> */}
      </div>
    </>
  );
}

export default ProfessionalSummary;
