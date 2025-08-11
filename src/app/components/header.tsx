import React from 'react';

export default function Header() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16">
                    <div className="flex space-x-8">
                        <a
                            href="#"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="/resume"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Resume
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}