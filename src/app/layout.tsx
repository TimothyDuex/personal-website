import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ContactInfoPanel from "./about/_profile/ContactInfoPanel";
import NavBar from "./_components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim Duex's Website",
  description: "Personal Website for Timothy Duex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <div className="w-screen min-h-screen bg-neutral-950">
            <div className="grid justify-center">
              {/* Contact Info Panel */}
              <NavBar />
              <ContactInfoPanel />
              {/* NavBar */}
              <div className="relative z-10 min-h-screen flex flex-col px-8">
                <div className="max-w-4xl mx-6 my-6 px-6 py-4 bg-primary-bg rounded-3xl border border-primary-border">
                  {/* Respective Content to NavBar Selection */}
                  <div className="max-w-4xl mx-auto px-6 py-2">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
