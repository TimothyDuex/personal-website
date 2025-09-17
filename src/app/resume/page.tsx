import ProfessionalExperience from "./ProfessionalExperience";
import React from "react";
import SkillSection from "./SkillSection";
import ProfessionalSummary from "./ProfessionalSummary";

export default function ResumePage() {
  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        Skills
      </h2>
      <SkillSection />
      <ProfessionalSummary />
      <ProfessionalExperience />
    </>
  );
}
