import React from 'react';

const NavBar = ({
    page,
    setPage,
}: {
    page: number,
    setPage: (page: number) => void,
}) => {
    const navItems = [
        { id: 0, name: 'About' },
        { id: 1, name: 'Resume' }
    ];

    return (
        <nav className={`bg-white dark:bg-gray-900`}>
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
                            <button
                                key={item.name}
                                onClick={() => setPage(item.id)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    page == item.id
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;