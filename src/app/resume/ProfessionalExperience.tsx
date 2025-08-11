'use client'

import React, { useState } from 'react';
import {Briefcase, Calendar, MapPin, MessageSquareMore, X} from 'lucide-react';
import getWorkExperience, {WorkExperience} from "./WorkExperience";
import IconTextRow from "../components/IconTextRow";
import Image from "next/image";

const ProfessionalExperience = () => {
    const [selectedExperience, setSelectedExperience] = useState<WorkExperience|null>(null);

    const experiences: WorkExperience[] = getWorkExperience();

    const openModal = (experience: WorkExperience) => {
        setSelectedExperience(experience);
    };

    const closeModal = () => {
        setSelectedExperience(null);
    };

    return (
        <>
            <div className="max-w-4xl mx-auto px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Professional Experiences</h2>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <WorkExperienceCard key={exp.id} experience={exp} openModal={openModal} />
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedExperience && <WorkExperiencePopOver experience={selectedExperience} closeModal={closeModal}/>}
        </>
    );
};

function WorkExperienceCard({ experience, openModal }: {experience: WorkExperience, openModal: (experience: WorkExperience) => void}) {
    return (
        <div
            key={experience.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
            onClick={() => openModal(experience)}
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                    <WorkExperienceCardCompany experience={experience}/>
                    <IconTextRow icon={Briefcase} text={experience.position}/>
                    <IconTextRow icon={MapPin} text={experience.location}/>
                    <WorkExperienceCardDescription experience={experience}/>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <WorkExperienceCardPeriod experience={experience}/>
                </div>
            </div>
        </div>
    )
}

function WorkExperienceCardCompany({ experience }: { experience: WorkExperience }) {
    return (
        <div className={`flex items-center gap-3 mb-5`}>
            <Image
                src={`/images/${experience.companyImage}`}
                alt={experience.companyImage}
                width={75} // Optional, but recommended for explicit control
                height={75} // Optional, but recommended for explicit control
                className="w-10 h-10 object-contain flex-shrink-0"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {experience.company}
            </h3>
        </div>
    )
}

function WorkExperienceCardDescription({experience}: { experience: WorkExperience }) {
    return (
        <div className={`flex items-center gap-3`}>
            <MessageSquareMore className="w-5 h-5 text-gray-600 flex-shrink-0"/>
            <p className="text-gray-500 text-sm line-clamp-2">
                {experience.description}
            </p>
        </div>
    )
}

function WorkExperienceCardPeriod({experience}: { experience: WorkExperience }) {
    return (
        <div className={`flex items-center gap-3`}>
            <Calendar className="w-5 h-5 text-gray-600 flex-shrink-0"/>
            <p className="text-gray-500 font-medium text-right">
                {experience.period}
            </p>
        </div>
    )
}

function WorkExperiencePopOver({experience, closeModal}: { experience: WorkExperience, closeModal: () => void }) {
    return (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            {experience.company}
                        </h2>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-lg text-gray-700 font-medium">
                                {experience.position}
                            </p>
                        </div>
                        <p className="text-gray-600 mt-1">
                            {experience.location} • {experience.period}
                        </p>
                    </div>
                    <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="px-6 py-6">
                    <div className="space-y-6">
                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Overview</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {experience.description}
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                            <ul className="space-y-2">
                                {experience.responsibilities.map((responsibility, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-gray-700">{responsibility}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                        {tech}
                      </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience;