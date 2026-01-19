"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookHeart } from "lucide-react";

export function StorySection() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden text-brand-black">
      
      {/* Container */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* 1. IMAGE CONTENT (Zig-Zag Layout) */}
          <div className="relative w-full flex justify-center lg:justify-start order-2 lg:order-1 group">
            
            {/* --- SQUARE IMAGE DESIGN --- 
                FIX: Increased lg:max-w from [440px] to [520px] to make it larger.
            */}
            <div className="relative w-full max-w-sm lg:max-w-[520px] mx-auto lg:mx-0 perspective-1000">
              
              {/* 1. The "Stacked" Layer Behind (Subtle Shadow) */}
              <div className="absolute inset-0 w-full h-full bg-brand-blue/5 rounded-2xl transform translate-x-3 translate-y-3 z-0 transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:bg-brand-blue/10" />
              
              {/* 2. The Main Image Card - NOW SQUARE */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden z-10 shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 bg-white">
                
                <Image
                  src="/images/shop/store-2.webp"
                  alt="A quiet corner in Basa Pilipinas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Gradient for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Caption */}
                <div className="absolute bottom-8 left-8 right-8 text-white text-left z-20">
                   <p className="font-heading font-black text-2xl tracking-wide leading-tight">
                     "Every book has a soul."
                   </p>
                   <div className="flex items-center gap-3 mt-3 opacity-90">
                      <div className="h-[2px] w-12 bg-brand-red"></div>
                      <p className="text-xs uppercase tracking-[0.2em] font-bold">
                        Est. 2024
                      </p>
                   </div>
                </div>

              </div>

            </div>

          </div>

          {/* 2. TEXT CONTENT */}
          <div className="flex flex-col space-y-8 text-center lg:text-left order-1 lg:order-2">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest w-fit mx-auto lg:mx-0 border border-red-100">
               <BookHeart className="w-3 h-3" />
               <span>Our Why</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-brand-black leading-[1.1]">
              We believe books <br/>
              <span className="text-brand-blue">should find you.</span>
            </h2>

            {/* Copy */}
            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                In a world of digital noise, there is nothing quite like the weight of a book in your hands. 
                But for many Filipinos, building a personal library feels like a luxury.
              </p>
              <p>
                That’s why we started Basa Pilipinas. To rescue great stories and pass them on to 
                the readers who need them most—at prices that make sense.
              </p>
            </div>

            {/* PREMIUM HOVER LINK */}
            <div className="pt-2 flex justify-center lg:justify-start">
               <Link 
                 href="/about" 
                 className="group inline-flex items-center gap-3 text-brand-black font-bold text-lg tracking-tight"
               >
                 <span className="relative pb-1">
                   Read our full story
                   {/* Red Underline Animation */}
                   <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
                 </span>
                 
                 {/* Circle Arrow Animation */}
                 <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-red group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-brand-red transition-colors duration-300 group-hover:text-white" />
                 </div>
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}