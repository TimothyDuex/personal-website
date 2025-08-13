import React from "react";
import {Cloud, Github, Linkedin} from "lucide-react";

export interface SocialLink {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    label: string,
    url: string,
    color: string,
}

const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        url: 'https://github.com/TimothyDuex',
        color: 'hover:text-blue-600'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/timothy-duex-488091148',
        color: 'hover:text-blue-600'
    },
    {
        icon: Cloud,
        label: 'SoundCloud',
        url: 'https://soundcloud.com/user-954580940',
        color: 'hover:text-blue-600'
    },
];

function getSocialLinks() {
    return socialLinks;
}

export default getSocialLinks;
