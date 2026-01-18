import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header"; // UPDATED IMPORT
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basa Pilipinas | Authentic Books",
  description: "Elevating Filipino minds through accessible literature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}>
        
        <Header /> 
        
        {children}
      </body>
    </html>
  );
}