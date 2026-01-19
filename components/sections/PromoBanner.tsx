"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="w-full py-20 md:py-24 bg-brand-blue text-white overflow-hidden relative">
      
      {/* 1. TEXTURE: Subtle White Grid (Low Opacity) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-10 pointer-events-none" />
      
      {/* 2. DECOR: Giant Abstract Icon */}
      <div className="absolute -bottom-12 -right-12 md:-right-20 text-white opacity-5 transform rotate-12 pointer-events-none">
          <BookOpen className="w-64 h-64 md:w-96 md:h-96" />
      </div>

      {/* Main Content */}
      {/* ALIGNMENT FIX: Removed 'px-4 md:px-6' to match Story/Category alignment exactly */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left max-w-2xl">
            
            {/* Badge: Gold Accents */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-amber-400 shadow-sm mx-auto md:mx-0">
              <Gem className="h-3.5 w-3.5" /> 
              <span>Budget Friendly Gems</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter leading-[1] text-white">
              Great stories belong <br/>
              <span className="text-white/80">to everyone.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
              Building a library shouldn't be a luxury. Discover curated classics, modern hits, and hidden gems—all for 
              {/* Gold Price Accent */}
              <span className="text-amber-400 font-bold ml-1.5">
                under ₱300.
              </span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button 
              asChild 
              size="lg" 
              className="w-full md:w-auto h-16 px-10 rounded-full bg-white text-brand-blue hover:bg-brand-red hover:text-white font-bold text-lg shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0"
            >
              <Link href="/collections/under-300">
                Shop the Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}