import ProfessionalExperience from "./ProfessionalExperience";
import React from "react";
import SkillSection from "./SkillSection";
import ProfessionalSummary from "./ProfessionalSummary";

export default function ResumePage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary-text mb-8">Skills</h2>
      <SkillSection />;
      <ProfessionalSummary />;
      <ProfessionalExperience />;
    </>
  );
}
