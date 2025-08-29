import React from "react";

function ProfessionalSummary() {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text mb-8">
        Professional Mission
      </h2>

      <div className="md:col-span-2 rounded-2xl">
        {/* TODO: Add back once implemented caching solution for TTS */}
        {/* <SmartListenableText className="prose max-w-none" as="div"> */}
        <p className="text-lg text-secondary-text leading-relaxed mb-6">
          I am a Software Engineer with a strong background in web development,
          full-stack engineering, distributed systems, and micro-services. My
          experience in software development encompasses various aspects of
          engineering, and I thrive on solving complex problems and building
          robust solutions.
        </p>

        <p className="text-lg text-secondary-text leading-relaxed mb-6">
          Beyond my professional expertise, I have a deep passion for music and
          music production. Combining my technical skills with my love for
          music, I aim to explore innovative ways to integrate technology into
          the music industry. I am dedicated to continuous learning and growth
          in both the software development field and the world of music.
        </p>

        <p className="text-lg text-secondary-text leading-relaxed mb-6">
          Feel free to connect with me to discuss opportunities where I can
          leverage my technical skills and passion for music to create impactful
          and creative solutions.
        </p>
        {/* </SmartListenableText> */}
      </div>
    </>
  );
}

export default ProfessionalSummary;
