import React from 'react';

const AboutSection = () => {

    const navItems = [
        { name: 'About', href: '/', active: true },
        { name: 'Resume', href: '/resume' }
    ];

    return (
        <div className={`min-h-screen bg-white dark:bg-gray-900`}>
            {/* About Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Section Header */}
                <div className="flex justify-between mb-6">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            About Tim ✌
                        </h1>
                    </div>
                    {/* Navigation Row */}
                    <div className="flex items-baseline space-x-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    item.active
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* About Content */}
                <AboutContent />

            </div>
        </div>
    );
};

function AboutContent() {
    return (
        <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I am a Software Engineer with a strong background in web development, full-stack engineering,
                    distributed systems, and micro-services. My experience in software development encompasses various
                    aspects of engineering, and I thrive on solving complex problems and building robust solutions.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    Beyond my professional expertise, I have a deep passion for music and music production. Combining my
                    technical skills with my love for music, I aim to explore innovative ways to integrate technology
                    into the music industry. I am dedicated to continuous learning and growth in both the software
                    development field and the world of music.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Feel free to connect with me to discuss opportunities where I can leverage my technical skills and
                    passion for music to create impactful and creative solutions.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;