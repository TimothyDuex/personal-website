"use client";

import React, { useEffect, useRef, useState } from "react";

import getContactInfo, { ContactInfo } from "../../_info/ContactInfo";
import getSocialLinks, { SocialLink } from "../../_info/SocialLink";
import ProfilePanel from "./ProfilePanel";
import ContactButton from "./ContactButton";
import ScrollIndicator from "../../_components/ScrollIndicator";
import Image from "next/image";

const ContactInfoPanel = () => {
  const [isContactOpen, setIsContactOpen] = React.useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const vinylRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      // Calculate vinyl scroll progress
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollStart = containerTop - windowHeight;
        const scrollEnd = containerTop + containerHeight;
        const scrollDistance = scrollEnd - scrollStart;
        const currentScroll = newScrollY - scrollStart;

        const progress = Math.max(
          0,
          Math.min(1, currentScroll / scrollDistance),
        );
        setScrollProgress(progress);
        console.log(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate vinyl rotation and effects based on scroll progress
  const rotation = scrollProgress * 720; // Two full rotations
  const scale = 1 + scrollProgress * 0.2;
  const opacity = Math.max(0.3, 1 - scrollProgress * 0.7);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-8"
      ref={containerRef}
    >
      {/* Background Vinyl Record Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={vinylRef}
          className="relative w-96 h-96 md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem]"
          style={{
            transform: `rotate(${rotation}deg) scale(${scale})`,
            opacity: opacity * 0.4, // Subtle background presence
            transition: "none",
          }}
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full">
            {/* Vinyl Grooves - Multiple layers for realism */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  top: `${8 + i * 4.2}%`,
                  left: `${8 + i * 4.2}%`,
                  right: `${8 + i * 4.2}%`,
                  bottom: `${8 + i * 4.2}%`,
                  borderColor:
                    i % 2 === 0
                      ? "rgba(98, 112, 132, 0.8)"
                      : "rgba(144, 150, 162, 0.6)",
                  borderWidth: i % 3 === 0 ? "1px" : "0.5px",
                  opacity: 0.8,
                }}
              />
            ))}

            {/* Album Cover/Center Label - More detailed */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
              {/* Placeholder Album Art - Replace with your image */}
              <Image
                src="/images/vinyl.jpg"
                alt="Album Art"
                className="absolute inset rounded-full object-cover shadow-inner"
                width="1000"
                height="1000"
              />

              {/* Center Hole */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-black rounded-full shadow-inner border border-gray-900"></div>
            </div>

            {/* Enhanced Vinyl Shine Effect with multiple layers */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from ${rotation * 2}deg, transparent 0deg, rgba(255,255,255,0.12) 30deg, rgba(255,255,255,0.06) 60deg, transparent 90deg, rgba(255,255,255,0.04) 180deg, transparent 270deg)`,
              }}
            />

            {/* Additional highlight for spinning effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(${rotation + 45}deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)`,
              }}
            />

            {/* Outer rim highlight */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-gray-600 via-transparent to-gray-700 bg-clip-border"
              style={{ padding: "1px" }}
            >
              <div className="w-full h-full rounded-full bg-transparent"></div>
            </div>
          </div>

          {/* Enhanced Floating Elements with motion trails */}
          <div className="absolute -top-12 -right-12 w-6 h-6 bg-white rounded-full opacity-30 animate-pulse">
            <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000">
            <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20 delay-500"></div>
          </div>
          <div className="absolute top-1/4 -left-16 w-3 h-3 bg-blue-400 rounded-full opacity-25 animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 -right-20 w-5 h-5 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1500"></div>

          {/* Motion blur effect for spinning indication */}
          <div
            className="absolute inset-4 rounded-full border border-white opacity-10"
            style={{
              transform: `rotate(${rotation * 1.2}deg)`,
              filter: `blur(${Math.min(scrollProgress * 2, 1)}px)`,
            }}
          />
        </div>
      </div>
      {/* Main Content Container */}
      <div
        className="relative z-10 max-w-4xl mx-4 my-4 px-6 py-4 glass-card-primary"
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
            <div className="grid grid-cols-1 gap-5">
              <hr className="border-neutral-300" />
              <div className="flex justify-center items-center">
                <ContactInfoExplicit />
              </div>
              <div className="flex justify-center items-center gap-2">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-start">
        {contactInfo.map((contact, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-fill-bg rounded-lg flex items-center justify-center">
              <contact.icon className="w-5 h-5 text-fill-text" />
            </div>
            <div>
              <p className="text-sm font-medium text-quaternary-text">
                {contact.label}
              </p>
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-secondary-text hover:text-fill-text transition-colors duration-200"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-secondary-text">{contact.value}</p>
              )}
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
      <div className="flex space-x-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center text-quaternary-text ${social.color} transition-colors duration-200`}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfoPanel;
