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
            className="px-3 rounded-md text-sm font-medium transition-colors duration-200 text-gray-300 bg-neutral-800 hover:bg-gray-100 hover:text-gray-900"
        >
            { isOpen ? <CircleChevronUp /> :<CircleChevronDown /> }
        </button>
    );
};

export default ContactButton;