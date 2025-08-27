import React from "react";
import { getProfileInfo, ProfileInfo } from "../../_info/ProfileInfo";
import Image from "next/image";
import TypewriterText from "../../_components/_animations/TypewriterText";
import GradientText from "../../_components/_animations/GradientText";
import StaggeredList from "../../_components/_animations/StaggeredList";

const ProfilePanel = () => {
  const profileInfo: ProfileInfo = getProfileInfo();
  return (
    <div className={`flex items-center space-x-6 p-4 ${profileInfo.className}`}>
      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={`/images/${profileInfo.profileImage}`}
            alt={profileInfo.profileImage}
            width={75} // Optional, but recommended for explicit control
            height={75} // Optional, but recommended for explicit control
            className="w-30 h-20 object-contain flex-shrink-0"
          />
        </div>
      </div>

      <div className="flex-1">
        <StaggeredList
          items={[
            <ProfileName key={profileInfo.name} />,
            <ProfileTagline key={profileInfo.tagline} />,
            <ProfileDescription key={"description"} />,
          ]}
          delay={3000}
        />
      </div>
    </div>
  );
};

function ProfileName() {
  const profileInfo: ProfileInfo = getProfileInfo();

  return (
    <h1 className="text-2xl md:text-3xl font-bold text-primary-text">
      <TypewriterText text={profileInfo.name} speed={130} />
    </h1>
  );
}

function ProfileTagline() {
  const profileInfo: ProfileInfo = getProfileInfo();

  return (
    <p className="text-lg md:text-xl text-secondary-text font-medium">
      <TypewriterText text={profileInfo.tagline} delay={3000} speed={70} />
    </p>
  );
}

function ProfileDescription() {
  return (
    <p className="text-lg md:text-xl text-secondary-text font-medium">
      <GradientText>Fullstack Software Engineer, DJ, Producer </GradientText>
    </p>
  );
}

export default ProfilePanel;
