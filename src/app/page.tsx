"use client";

import ContactInfoPanel from "./_components/_profile/ContactInfoPanel";
import NavBar from "./_components/NavBar";
import AboutSection from "./_components/_about/AboutSection";
import { useCallback, useState } from "react";
import ProfessionalExperience from "./_components/_resume/ProfessionalExperience";
import MusicSection from "./_components/_music/MusicSection";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "";

  const navigateToSection = useCallback(
    (newSection: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newSection === "") {
        params.delete("section");
      } else {
        params.set("section", newSection.toLowerCase());
      }

      const newUrl = params.toString() ? `/?${params.toString()}` : "/";
      router.push(newUrl, { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <div className="w-screen min-h-screen bg-neutral-950">
      <div className="grid justify-center">
        {/* Contact Info Panel */}
        <div className="pt-6" />
        <ContactInfoPanel />
        {/* NavBar */}
        <div className="max-w-4xl mx-6 my-6 px-6 py-4 bg-primary-bg rounded-3xl border border-primary-border">
          <NavBar page={section} setPage={navigateToSection} />
          {/* Respective Content to NavBar Selection */}
          <div className="max-w-4xl mx-auto px-6 py-2">
            {(section == "" || section == "about") && <AboutSection />}
            {section == "resume" && <ProfessionalExperience />}
            {section == "music" && <MusicSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
