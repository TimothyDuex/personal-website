import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ContactInfoPanel from "./about/_profile/ContactInfoPanel";
import NavBar from "./_components/NavBar";
import ClientSideLayout from "./_components/_util/ClientSideLayout";

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
              <NavBar />
              <ContactInfoPanel />
              {/* Content */}
              <ClientSideLayout>{children}</ClientSideLayout>
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
