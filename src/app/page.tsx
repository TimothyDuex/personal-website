'use client'

import ContactInfoPanel from "./(components)/ContactInfoPanel";
import NavBar from "./(components)/NavBar";
import AboutSection from "./(components)/AboutSection";
import {useState} from "react";
import ProfessionalExperience from "./(components)/ProfessionalExperience";

export default function Home() {
    const [page, setPage] = useState(0);

    return (
        <div>
            {/* Contact Info Panel */}
            <ContactInfoPanel />
            {/* NavBar */}
            <NavBar page={page} setPage={setPage} />
            {/* Respective Content to NavBar Selection */}
            {page == 0 && <AboutSection />}
            {page == 1 && <ProfessionalExperience/>}
        </div>
    );
}
