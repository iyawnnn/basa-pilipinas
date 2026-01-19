"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export function StoreShowcase() {
  return (
    <section className="relative w-full py-24 bg-white text-brand-black border-t border-gray-100 overflow-hidden">
      
      {/* 1. TEXTURE: Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10">
        
        {/* 2. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest rounded-full">
            <MapPin className="w-3 h-3" />
            <span>Pampanga Branch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-black tracking-tight leading-none">
            Where stories find <br />
            <span className="text-brand-blue">their home.</span>
          </h2>
          
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            There is a certain magic in a physical bookstore that a screen cannot replicate. 
            Come visit our shelves at WalterMart Pampanga and experience the joy of a real book in your hands.
          </p>
        </div>

        {/* 3. VISUALS: Aspect Ratio Controlled Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          
          {/* Card 1: THE COLLECTION */}
          {/* Added max-w-[400px] to prevent giant images on tablets in portrait mode */}
          <div className="group relative w-full max-w-[400px] md:max-w-none mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
            <Image
              src="/images/shop/store-1.svg" 
              alt="Basa Pilipinas Bookshelves"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Label */}
            <div className="absolute top-0 left-0 bg-brand-black text-white px-5 py-2.5 rounded-br-2xl font-bold text-xs tracking-widest uppercase z-10">
              The Collection
            </div>
          </div>

          {/* Card 2: THE SPACE */}
          {/* Note: Kept the md:translate-y-12 for that nice staggered look on desktop, but it resets on mobile */}
          <div className="group relative w-full max-w-[400px] md:max-w-none mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl md:translate-y-12">
            <Image
              src="/images/shop/store-2.svg" 
              alt="Inside Basa Pilipinas Store"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Label */}
            <div className="absolute top-0 left-0 bg-brand-blue text-white px-5 py-2.5 rounded-br-2xl font-bold text-xs tracking-widest uppercase z-10">
              The Space
            </div>
          </div>

          {/* Card 3: EXCLUSIVE MERCH */}
          <div className="group relative w-full max-w-[400px] md:max-w-none mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
            <Image
              src="/images/shop/store-3.svg" 
              alt="Basa Pilipinas Tote Bag"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Label */}
            <div className="absolute top-0 left-0 bg-brand-red text-white px-5 py-2.5 rounded-br-2xl font-bold text-xs tracking-widest uppercase z-10">
              Exclusive Merch
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}