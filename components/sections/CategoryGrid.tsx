"use client";

import Link from "next/link";
import { ArrowRight, Heart, Coins, Sprout, Lightbulb, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  {
    id: "romance",
    title: "Romance",
    description: "Swoon-worthy stories",
    icon: Heart,
    href: "/collections/romance",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Master your money",
    icon: Coins,
    href: "/collections/finance",
  },
  {
    id: "self-help",
    title: "Self Help",
    description: "Growth & productivity",
    icon: Sprout,
    href: "/collections/self-help",
  },
  {
    id: "psychology",
    title: "Psychology",
    description: "The human mind",
    icon: Lightbulb,
    href: "/collections/psychology",
  },
  {
    id: "business",
    title: "Business",
    description: "Strategy & leadership",
    icon: Briefcase,
    href: "/collections/business",
  },
];

export function CategoryGrid() {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="container">
        
        {/* Header */}
        {/* FIX: Increased 'mb-2' to 'mb-10'. 
            This lifts the header away from the cards, preventing the hover overlap. 
        */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 px-4 md:px-0">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-black tracking-tighter leading-tight">
              Find Your <span className="text-brand-blue">Focus.</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Curated shelves for every interest.
            </p>
          </div>
          
          <Link 
            href="/products" 
            className="hidden md:flex items-center text-sm font-bold text-brand-black hover:text-brand-blue transition-colors group"
          >
            Browse All Genres <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory py-12 -my-12 gap-6 px-6 xl:grid xl:grid-cols-5 xl:gap-6 xl:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.href}
              className="group relative flex flex-col justify-between min-w-[160px] md:min-w-[240px] xl:min-w-0 h-[180px] md:h-[260px] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-blue/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 snap-center z-10"
            >
              {/* Top: Icon */}
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-black shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <cat.icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              
              {/* Bottom: Content */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-brand-black group-hover:text-brand-blue transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium group-hover:text-gray-500 line-clamp-1">
                  {cat.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden xl:block">
                 <ArrowRight className="h-5 w-5 text-brand-blue" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden px-4">
           <Button asChild variant="outline" className="w-full rounded-full border-gray-300 text-brand-black font-bold h-12 hover:bg-gray-50">
             <Link href="/products">Browse All Genres</Link>
           </Button>
        </div>

      </div>
    </section>
  );
}