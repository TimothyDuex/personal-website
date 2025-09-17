"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  MessageSquareMore,
  X,
} from "lucide-react";
import getWorkExperience, { WorkExperience } from "../_info/WorkExperience";
import IconTextRow from "./IconTextRow";
import Image from "next/image";
import SlideInOnScroll from "../_components/_animations/SlideInOnScroll";
import TiltCard from "../_components/_animations/TiltCard";
import { IMAGE_SIZES } from "../_util/imageSizes";

const ProfessionalExperience = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperience | null>(null);

  const experiences: WorkExperience[] = getWorkExperience();

  const openModal = (experience: WorkExperience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <>
      <h2 className="adaptive-text-heading adaptive-margin-bottom-general">
        Professional Experiences
      </h2>

      <div className="space-y-3 md:space-y-6">
        {experiences.map((exp) => (
          <SlideInOnScroll key={exp.id} direction="up">
            <WorkExperienceCard experience={exp} openModal={openModal} />
          </SlideInOnScroll>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedExperience && (
        <WorkExperiencePopOver
          experience={selectedExperience}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

function WorkExperienceCard({
  experience,
  openModal,
}: {
  experience: WorkExperience;
  openModal: (experience: WorkExperience) => void;
}) {
  return (
    <TiltCard
      key={experience.id}
      className="cursor-pointer"
      onClick={() => openModal(experience)}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <WorkExperienceCardCompany experience={experience} />
          <IconTextRow icon={Briefcase} text={experience.position} />
          <IconTextRow icon={MapPin} text={experience.location} />
          <WorkExperienceCardDescription experience={experience} />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <WorkExperienceCardPeriod experience={experience} />
        </div>
      </div>
    </TiltCard>
  );
}

function WorkExperienceCardCompany({
  experience,
}: {
  experience: WorkExperience;
}) {
  return (
    <div
      className={`flex items-center adaptive-gap-general adaptive-margin-bottom-general`}
    >
      <div className="img-company">
        <Image
          src={`/images/${experience.companyImage}`}
          alt={experience.companyImage}
          width={128}
          height={128}
          className="img-cover rounded-md"
          sizes={IMAGE_SIZES.company}
        />
      </div>
      <h3 className="adaptive-text-subheading mb-1">{experience.company}</h3>
    </div>
  );
}

function WorkExperienceCardDescription({
  experience,
}: {
  experience: WorkExperience;
}) {
  return (
    <div className={`flex items-center adaptive-gap-general`}>
      <MessageSquareMore className="img-icon adaptive-text-caption flex-shrink-0" />
      <p className="adaptive-text-caption line-clamp-2">
        {experience.description}
      </p>
    </div>
  );
}

function WorkExperienceCardPeriod({
  experience,
}: {
  experience: WorkExperience;
}) {
  return (
    <div className={`flex items-center adaptive-gap-general`}>
      <Calendar className="img-icon adaptive-text-body flex-shrink-0" />
      <p className="adaptive-text-body text-right">{experience.period}</p>
    </div>
  );
}

function WorkExperiencePopOver({
  experience,
  closeModal,
}: {
  experience: WorkExperience;
  closeModal: () => void;
}) {
  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-black/10 flex items-center justify-center adaptive-padding-general z-50">
      <SlideInOnScroll direction="none">
        <div className="bg-primary-bg rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary-border">
          {/* Modal Header */}
          <div className="sticky top-0 bg-primary-bg border-b border-primary-border adaptive-padding-x-popover adaptive-padding-y-popover flex justify-between items-start">
            <div>
              <WorkExperienceCardCompany experience={experience} />
              <IconTextRow icon={Briefcase} text={experience.position} />
              <IconTextRow icon={MapPin} text={experience.location} />
              <WorkExperienceCardPeriod experience={experience} />
            </div>
            <button
              onClick={closeModal}
              className="adaptive-text-caption hover:text-gray-600 transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="adaptive-padding-x-popover adaptive-padding-y-popover">
            <div className="space-y-3 md:space-y-4">
              {/* Description */}
              <div>
                <h3 className="font-semibold adaptive-text-body adaptive-margin-bottom-popover-subheading">
                  Overview
                </h3>
                <p className="adaptive-text-body adaptive-text-body-line-height">
                  {experience.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="font-semibold adaptive-text-body adaptive-margin-bottom-popover-subheading">
                  Key Responsibilities
                </h3>
                <ul className="space-y-1 md:space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="adaptive-text-body">
                        {responsibility}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold adaptive-text-body adaptive-margin-bottom-popover-subheading">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap adaptive-gap-skills">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-secondary-bg adaptive-text-caption px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideInOnScroll>
    </div>
  );
}

export default ProfessionalExperience;
