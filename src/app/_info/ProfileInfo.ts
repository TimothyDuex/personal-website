export interface ProfileInfo {
    name: string;
    tagline?: string;
    profileImage: string;
    className: string;
}

const profileInfo: ProfileInfo = {
        name: "Timothy Duex",
        tagline: "Writing Code 👨‍💻 and Making Music 🎧",
        profileImage: "profile_photo.jpeg",
        className: "",
};

export function getProfileInfo(): ProfileInfo {
    return profileInfo;
}
