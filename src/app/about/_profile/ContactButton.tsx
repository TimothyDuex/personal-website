"use client";

import React from "react";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";

const ContactButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={togglePanel}
      className="rounded-full text-sm font-medium transition-colors duration-200 text-tertiary-text bg-white/0 hover:bg-fill-bg-hover hover:text-fill-text-hover"
    >
      {isOpen ? (
        <CircleChevronUp className="img-button-icon" />
      ) : (
        <CircleChevronDown className="img-button-icon" />
      )}
    </button>
  );
};

export default ContactButton;
