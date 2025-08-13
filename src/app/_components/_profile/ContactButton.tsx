'use client';

import React from 'react';
import {CircleChevronDown, CircleChevronUp} from "lucide-react";

const ContactButton = (
    {
        isOpen,
        setIsOpen
    }: {
        isOpen: boolean,
        setIsOpen: (isOpen: boolean) => void
    }) => {
    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            onClick={togglePanel}
            className="px-3 rounded-md text-sm font-medium transition-colors duration-200 text-tertiary-text bg-primary-bg hover:bg-fill-bg-hover hover:text-fill-text-hover"
        >
            { isOpen ? <CircleChevronUp /> :<CircleChevronDown /> }
        </button>
    );
};

export default ContactButton;