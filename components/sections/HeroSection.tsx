"use client";

import Link from "next/link";
import { BookOpen, ShoppingBag, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white text-brand-black">
      
      {/* Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-widest w-fit mx-auto lg:mx-0 border border-blue-100">
              <MapPin className="w-3 h-3" />
              <span>Pampanga's Home for Books</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-brand-black leading-[1.1]">
              Curated stories for <br />
              <span className="text-brand-blue">the Filipino soul.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              More than a bookstore. We are a community hub in <span className="font-bold text-brand-black">WalterMart Pampanga</span>. 
              We believe reading is a right, ensuring every Filipino has access to books that spark curiosity—regardless of budget.
            </p>

            {/* --- SMART LAYOUT CONTAINER --- 
                1. 'max-w-[480px]': Prevents buttons from spreading too far apart on 645px screens.
                2. 'mx-auto lg:mx-0': Centers the block on mobile, aligns left on desktop.
                3. 'grid-cols-2': Forces the 2-on-top layout.
            */}
            <div className="grid grid-cols-2 xl:flex xl:flex-row items-center justify-center lg:justify-start gap-3 pt-4 w-full max-w-[480px] xl:max-w-none mx-auto lg:mx-0">
              
              {/* 1. Shop (Top Left) */}
              <Button asChild size="lg" className="col-span-1 h-12 sm:h-14 w-full xl:w-[200px] px-4 rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-100 transition-colors duration-300">
                <Link href="/products" className="flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Shop Now</span>
                </Link>
              </Button>
              
              {/* 2. Visit (Top Right) */}
              <Button asChild variant="outline" size="lg" className="col-span-1 h-12 sm:h-14 w-full xl:w-[200px] px-4 rounded-full border border-gray-300 hover:border-brand-black hover:bg-white text-brand-black font-bold text-sm sm:text-base shadow-sm transition-colors duration-300">
                <Link href="#locations" onClick={handleScroll} className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Visit Branch</span>
                </Link>
              </Button>

              {/* 3. Follow (Bottom Center) 
                  - 'col-span-2': Takes full width of the grid container (centered below).
                  - 'xl:w-[200px]': Restricts width on Desktop to match others.
              */}
              <Button asChild variant="secondary" className="col-span-2 xl:col-span-1 h-12 sm:h-14 w-full xl:w-[200px] px-4 rounded-full bg-blue-50 text-brand-blue hover:bg-blue-100 hover:text-blue-700 font-bold text-sm sm:text-base transition-colors duration-300">
                <Link href="https://www.facebook.com/BasaPilipinasFB" target="_blank" className="flex items-center justify-center gap-2">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Follow Us</span>
                </Link>
              </Button>

            </div>
          </div>

          {/* Right Column: Book Visual (UNCHANGED) */}
          <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative group perspective-1000">
              <div className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px] bg-brand-blue rounded-r-xl rounded-l-sm shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] transform transition-transform duration-700 ease-out rotate-y-[-15deg] group-hover:rotate-y-0 group-hover:scale-105 border-l-4 border-l-blue-900 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-brand-blue rounded-r-xl opacity-100" />
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10" />

                <div className="absolute top-12 left-0 right-0 text-center px-4">
                  <div className="inline-block p-4 rounded-full bg-[#0a3a8a] border border-white/20 mb-4">
                    <BookOpen className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-6xl font-heading font-black text-white tracking-widest opacity-90 leading-none">
                    BPB
                  </h2>
                  <div className="mt-4 border-t border-white/20 pt-4 mx-8">
                    <p className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                      Basa Pilipinas
                    </p>
                    <p className="text-xl font-heading font-bold text-white uppercase tracking-wide mt-1">
                      Bookstore
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-12 left-8 right-8">
                  <div className="h-1 w-full bg-white/20 mb-2 rounded-full" />
                  <div className="h-1 w-2/3 bg-white/20 mb-2 rounded-full" />
                  <div className="h-1 w-1/3 bg-brand-red rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-10 left-10 right-10 h-8 bg-black/20 blur-xl rounded-[50%] transform rotate-x-[60deg]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}