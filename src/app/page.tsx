'use client'

import ContactInfoPanel from "./(components)/ContactInfoPanel";
import NavBar from "./(components)/NavBar";
import AboutSection from "./(components)/AboutSection";
import {useState} from "react";
import ProfessionalExperience from "./(components)/ProfessionalExperience";

export default function Home() {
    const [page, setPage] = useState(0);

    return (
        <div className="w-screen min-h-screen bg-neutral-950">
            <div className="grid justify-center">
                {/* Contact Info Panel */}
                <div className="pt-6"/>
                <ContactInfoPanel/>
                {/* NavBar */}
                <div className="max-w-4xl mx-6 my-6 px-6 py-4 bg-neutral-800 rounded-3xl border border-neutral-700">
                    <NavBar page={page} setPage={setPage}/>
                    {/* Respective Content to NavBar Selection */}
                    {page == 0 && <AboutSection/>}
                    {page == 1 && <ProfessionalExperience/>}
                </div>
            </div>
        </div>
    );
}
