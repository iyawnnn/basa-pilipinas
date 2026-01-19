"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center bg-white px-6 pb-20 overflow-hidden">
      
      {/* 1. Modern Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* 2. Main Content */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto z-10">
        
        {/* Icon Container */}
        <div className="mb-8 p-5 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
           <BookX className="w-10 h-10 md:w-12 md:h-12 text-brand-blue" strokeWidth={1.5} />
        </div>

        {/* Typography */}
        <h1 className="font-heading font-black text-7xl md:text-9xl text-brand-black tracking-tighter leading-none mb-2">
          4<span className="text-red-600">0</span>4
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 tracking-tight">
          This chapter is missing.
        </h2>

        <p className="text-gray-500 text-lg font-medium mb-10 leading-relaxed">
          We looked through every shelf, but the page you are looking for has been moved, deleted, or never existed.
        </p>

        {/* Action Button (Single) */}
        <Button 
          asChild 
          size="lg" 
          className="rounded-full bg-brand-black text-white hover:bg-brand-blue transition-all font-bold h-12 px-10 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <Link href="/">
            Return Home
          </Link>
        </Button>

      </div>
      
      {/* 3. Footer Tech Label */}
      <div className="absolute bottom-8 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] select-none">
        Basa Pilipinas • Error 404
      </div>
    </div>
  );
}