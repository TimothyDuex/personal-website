import React from 'react';

import getContactInfo, {ContactInfo} from "../../_info/ContactInfo";
import getSocialLinks, {SocialLink} from "../../_info/SocialLink";
import ProfilePanel from "./ProfilePanel";
import ContactButton from "./ContactButton";

const ContactInfoPanel = () => {
    const [isContactOpen, setIsContactOpen] = React.useState<boolean>(false);

    return (
        <div className="max-w-4xl mx-4 my-4 px-6 py-4 rounded-3xl bg-neutral-800 border border-neutral-700">
            <div className="grid grid-rows-1 gap-1">
                <div className="flex justify-center items-center">
                    <ProfilePanel/>
                </div>
                <div className="flex justify-center items-center">
                    <ContactButton isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isContactOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="grid grid-cols-1 gap-5">
                        <hr className="border-neutral-300"/>
                        <div className="flex justify-center items-center">
                            <ContactInfoExplicit/>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <ContactInfoImplicit/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactInfoExplicit() {
    const contactInfo: ContactInfo[] = getContactInfo();

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-start">
                {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <div
                            className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <contact.icon className="w-5 h-5 text-blue-600"/>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-400">{contact.label}</p>
                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    className="text-gray-200 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <p className="text-gray-200">{contact.value}</p>
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
                        className={`w-10 h-10 flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200`}
                        aria-label={social.label}
                    >
                        <social.icon className="w-5 h-5"/>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ContactInfoPanel;