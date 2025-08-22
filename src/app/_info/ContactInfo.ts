import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export interface ContactInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  link: string | null;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY 🗽",
    link: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "timothyduex@gmail.com",
    link: "mailto:timothyduex@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@TimothyDuex",
    link: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/timothy-duex-488091148",
    link: null,
  },
];

function getContactInfo() {
  return contactInfo;
}

export default getContactInfo;
