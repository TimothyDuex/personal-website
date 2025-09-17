import React from "react";
import { getProfileInfo, ProfileInfo } from "../../_info/ProfileInfo";
import Image from "next/image";
import TypewriterText from "../../_components/_animations/TypewriterText";
import GradientText from "../../_components/_animations/GradientText";
import StaggeredList from "../../_components/_animations/StaggeredList";
import { IMAGE_SIZES } from "../../_util/imageSizes";

const ProfilePanel = () => {
  const profileInfo: ProfileInfo = getProfileInfo();
  return (
    <div
      className={`flex items-center space-x-2 sm:space-x-4 md:space-x-6 adaptive-padding-general ${profileInfo.className}`}
    >
      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        <div className="img-profile rounded-full overflow-hidden">
          <Image
            src={`/images/${profileInfo.profileImage}`}
            alt={profileInfo.profileImage}
            width={128} // Optional, but recommended for explicit control
            height={128} // Optional, but recommended for explicit control
            className="img-cover"
            priority // Since this is likely above the fold
            sizes={IMAGE_SIZES.profile}
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
    <h1 className="adaptive-text-heading">
      <TypewriterText text={profileInfo.name} speed={130} />
    </h1>
  );
}

function ProfileTagline() {
  const profileInfo: ProfileInfo = getProfileInfo();

  return (
    <p className="adaptive-text-body">
      <TypewriterText text={profileInfo.tagline} delay={3000} speed={70} />
    </p>
  );
}

function ProfileDescription() {
  return (
    <p className="adaptive-text-body font-medium">
      <GradientText>Fullstack Software Engineer, DJ, Producer </GradientText>
    </p>
  );
}

export default ProfilePanel;
