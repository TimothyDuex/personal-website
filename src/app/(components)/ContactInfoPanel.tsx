import React from 'react';

import getContactInfo, {ContactInfo} from "../(info)/ContactInfo";
import getSocialLinks, {SocialLink} from "../(info)/SocialLink";
import ProfilePanel from "./ProfilePanel";

const ContactInfoPanel = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-rows-2 gap-3">
                <div className="flex justify-center items-center">
                    <ProfilePanel/>
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div className="flex justify-center items-center">
                        <ContactInfoExplicit/>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <ContactInfoImplicit/>
                    </div>
                </div>
            </div>
        </section>
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
                            <p className="text-sm font-medium text-gray-500">{contact.label}</p>
                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                <p className="text-gray-900">{contact.value}</p>
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
                        className={`w-10 h-10 flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200`}
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