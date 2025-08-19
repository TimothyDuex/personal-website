'use client'

import ContactInfoPanel from "./_components/_profile/ContactInfoPanel";
import NavBar from "./_components/NavBar";
import AboutSection from "./_components/_about/AboutSection";
import {useState} from "react";
import ProfessionalExperience from "./_components/_resume/ProfessionalExperience";
import MusicSection from "./_components/_music/MusicSection";

export default function Home() {
    const [page, setPage] = useState(0);

    return (
        <div className="w-screen min-h-screen bg-neutral-950">
            <div className="grid justify-center">
                {/* Contact Info Panel */}
                <div className="pt-6"/>
                <ContactInfoPanel/>
                {/* NavBar */}
                <div className="max-w-4xl mx-6 my-6 px-6 py-4 bg-primary-bg rounded-3xl border border-primary-border">
                    <NavBar page={page} setPage={setPage}/>
                    {/* Respective Content to NavBar Selection */}
                    {page == 0 && <AboutSection />}
                    {page == 1 && <ProfessionalExperience />}
                    {page == 2 && <MusicSection />}
                </div>
            </div>
        </div>
    );
}
