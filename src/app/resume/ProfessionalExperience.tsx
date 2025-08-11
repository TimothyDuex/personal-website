'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';
import getWorkExperience, {WorkExperience} from "./WorkExperience";

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
                        <div
                            key={exp.id}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
                            onClick={() => openModal(exp)}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {exp.company}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2">
                                        <p className="text-lg text-gray-700 font-medium">
                                            {exp.position}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 mb-2">
                                        {exp.location}
                                    </p>
                                    <p className="text-gray-500 text-sm line-clamp-2">
                                        {exp.description}
                                    </p>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <p className="text-gray-500 font-medium text-right">
                                        {exp.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedExperience && (
                <div className="fixed inset-0 bg-transparent flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {selectedExperience.company}
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-lg text-gray-700 font-medium">
                                        {selectedExperience.position}
                                    </p>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    {selectedExperience.location} • {selectedExperience.period}
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
                                        {selectedExperience.description}
                                    </p>
                                </div>

                                {/* Responsibilities */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                                    <ul className="space-y-2">
                                        {selectedExperience.responsibilities.map((responsibility, index) => (
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
                                        {selectedExperience.technologies.map((tech, index) => (
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
            )}
        </>
    );
};

export default ProfessionalExperience;