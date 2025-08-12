import React from 'react';
import {getProfileInfo, ProfileInfo} from "../(info)/ProfileInfo";
import Image from "next/image";

const ProfilePanel = () => {
    const profileInfo: ProfileInfo = getProfileInfo();
    return (
        <div className={`flex items-center space-x-6 p-8 ${profileInfo.className}`}>
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <Image
                        src={`/images/${profileInfo.profileImage}`}
                        alt={profileInfo.profileImage}
                        width={75} // Optional, but recommended for explicit control
                        height={75} // Optional, but recommended for explicit control
                        className="w-30 h20 object-contain flex-shrink-0"
                    />
                </div>
            </div>

            {/* Name */}
            <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {profileInfo.name}
                </h1>

                {/* Tagline */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                    {profileInfo.tagline}
                </p>

                {/* Animated underline */}
                <div className="w-80 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
            </div>
        </div>
    );
};

export default ProfilePanel;