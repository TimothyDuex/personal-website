"use client";

import React, { useEffect, useState } from "react";

import getContactInfo, { ContactInfo } from "../../_info/ContactInfo";
import getSocialLinks, { SocialLink } from "../../_info/SocialLink";
import ProfilePanel from "./ProfilePanel";
import ContactButton from "./ContactButton";
import ScrollIndicator from "../../_components/ScrollIndicator";

const ContactInfoPanel = () => {
  const [isContactOpen, setIsContactOpen] = React.useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      {/* Main Content Container */}
      <div
        className="relative z-15 max-w-4xl adaptive-margin-general px-6 py-2 md:py-4 glass-card-hero"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="grid grid-rows-1 gap-1">
          <div className="flex justify-center items-center">
            <ProfilePanel />
          </div>
          <div className="flex justify-center items-center">
            <ContactButton
              isOpen={isContactOpen}
              setIsOpen={setIsContactOpen}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isContactOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 adaptive-column-gap-general">
              <hr className="border-neutral-300" />
              <div className="flex justify-center items-center">
                <ContactInfoExplicit />
              </div>
              <div className="flex justify-center items-center adaptive-gap-skills">
                <ContactInfoImplicit />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator scrollY={scrollY} />
    </div>
  );
};

function ContactInfoExplicit() {
  const contactInfo: ContactInfo[] = getContactInfo();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 adaptive-gap-general justify-start">
        {contactInfo.map((contact, index) => (
          <div key={index} className="flex items-center space-x-2 md:space-x-4">
            <div className="flex-shrink-0 img-icon-fill-bg-size bg-fill-bg rounded-lg flex items-center justify-center">
              <contact.icon className="img-icon text-fill-text" />
            </div>
            <div>
              <p className="adaptive-text-caption">{contact.label}</p>
              <p className="adaptive-text-body">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactInfoImplicit() {
  const socialLinks: SocialLink[] = getSocialLinks();

  return (
    <div>
      <div className="flex space-x-3 md:space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`img-icon flex items-center justify-center text-quaternary-text ${social.color} transition-colors duration-200`}
            aria-label={social.label}
          >
            <social.icon className="img-icon" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfoPanel;
