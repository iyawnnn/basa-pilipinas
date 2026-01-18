"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] w-full flex flex-col items-center justify-center bg-white overflow-hidden">
      
      {/* --- GRAPHING PAPER BACKGROUND --- */}
      {/* Creates a 20px x 20px light blue grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
           style={{
             backgroundImage: `linear-gradient(#053a9310 1px, transparent 1px), linear-gradient(90deg, #053a9310 1px, transparent 1px)`,
             backgroundSize: '24px 24px'
           }}
      />
      
      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* The "Stamp" Effect */}
        <div className="border-4 border-brand-black p-8 rounded-lg bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 max-w-lg w-full">
            <h1 className="font-heading font-black text-8xl md:text-9xl text-brand-black leading-none mb-2">
              4<span className="text-brand-red">0</span>4
            </h1>
            <div className="h-1 w-full bg-brand-black mb-4"></div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-brand-blue">
              Page Not Found
            </h2>
        </div>

        {/* Minimal Message */}
        <p className="text-gray-500 font-medium text-lg max-w-md mb-10">
          The page you are looking for isn't in our syllabus. It might have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-brand-black text-white hover:bg-brand-blue rounded-none border-2 border-transparent hover:border-brand-blue transition-all font-bold h-12 px-8 shadow-lg"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Go Home
            </Link>
          </Button>

          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="bg-white text-brand-black border-2 border-brand-black hover:bg-gray-50 rounded-none font-bold h-12 px-8"
          >
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Books
            </Link>
          </Button>
        </div>

      </div>
    </div>
  );
}