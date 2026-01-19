"use client";

import Link from "next/link";
import { ArrowRight, Book, Sun, Hourglass, Sprout, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  {
    id: "filipiniana",
    title: "Filipino Titles",
    description: "Local stories & history",
    href: "/collections/filipiniana",
    icon: Sun,
    bgClass: "bg-[#FDF6F0]", 
    accentColor: "text-orange-600 bg-orange-100",
    books: [
      { color: "bg-red-700", height: "h-20", title: "Noli" },
      { color: "bg-blue-800", height: "h-24", title: "El Fili" },
      { color: "bg-yellow-500", height: "h-16", title: "History" },
    ]
  },
  {
    id: "classics",
    title: "Timeless Classics",
    description: "Literature that lasts",
    href: "/collections/classics",
    icon: Hourglass,
    bgClass: "bg-[#F5F5F4]", 
    accentColor: "text-amber-700 bg-amber-100",
    books: [
      { color: "bg-[#5D4037]", height: "h-22", title: "Austen" }, 
      { color: "bg-[#8D6E63]", height: "h-18", title: "Orwell" }, 
      { color: "bg-[#3E2723]", height: "h-24", title: "Dante" }, 
    ]
  },
  {
    id: "self-help",
    title: "Self-Help",
    description: "Growth & productivity",
    href: "/collections/self-help",
    icon: Sprout,
    bgClass: "bg-[#ECFDF5]", 
    accentColor: "text-emerald-600 bg-emerald-100",
    books: [
      { color: "bg-emerald-600", height: "h-20", title: "Habits" },
      { color: "bg-teal-500", height: "h-22", title: "Money" },
      { color: "bg-green-700", height: "h-18", title: "Life" },
    ]
  },
  {
    id: "bestsellers",
    title: "Bestsellers",
    description: "Trending right now",
    href: "/collections/bestsellers",
    icon: TrendingUp,
    bgClass: "bg-[#EFF6FF]", 
    accentColor: "text-blue-600 bg-blue-100",
    books: [
      { color: "bg-brand-blue", height: "h-24", title: "Trend" },
      { color: "bg-indigo-600", height: "h-20", title: "New" },
      { color: "bg-sky-500", height: "h-22", title: "Hot" },
    ]
  },
];

export function CategoryGrid() {
  return (
    // FIX 1: Removed 'overflow-hidden' from section so shadows don't get clipped at the edges
    <section className="w-full py-20 lg:py-24 bg-gray-50 border-b border-gray-100">
      
      {/* Container */}
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red font-bold text-xs uppercase tracking-widest w-fit border border-red-100">
               <Book className="w-3 h-3" />
               <span>Curated Collections</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-black tracking-tighter leading-tight">
              Find your next <br className="hidden md:block"/>
              <span className="text-brand-blue">great read.</span>
            </h2>
          </div>

          {/* View Full Catalog (Desktop) */}
          <Link href="/products" className="hidden md:flex items-center gap-3 text-sm font-bold text-brand-black transition-colors group">
            <span className="relative pb-1">
                View Full Catalog
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-red group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* The Grid / Carousel 
            FIX 2: Added 'py-4' (Vertical Padding). 
            This creates invisible space above and below the cards inside the scroll container.
            Now when the card moves up (-translate-y-2), it moves into this padding space instead of being cut off.
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.href}
              // Card
              className={`group relative flex flex-col justify-between min-w-[300px] md:min-w-0 snap-center h-[320px] p-8 rounded-3xl border border-gray-200 shadow-sm hover:border-brand-blue/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white ${cat.bgClass}`}
            >
              
              {/* TOP: Icon & Text */}
              <div className="relative z-20 space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 ${cat.accentColor} bg-white/80 backdrop-blur-sm`}>
                   <cat.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold text-brand-black mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* BOTTOM: The "Virtual Shelf" Visual */}
              <div className="absolute bottom-0 right-0 flex items-end justify-end gap-1 px-8 pb-0">
                 {cat.books.map((book, i) => (
                    <div 
                      key={i} 
                      className={`relative w-10 ${book.height} ${book.color} rounded-t-sm shadow-md transform transition-transform duration-500 ease-out group-hover:-translate-y-4 translate-y-0 z-10 flex flex-col justify-center items-center`}
                      style={{ transitionDelay: `${i * 75}ms` }} 
                    >
                      <div className="w-[1px] h-full bg-white/20 absolute left-2" />
                      <div className="w-1/2 h-[2px] bg-white/30 rounded-full mb-2" />
                    </div>
                 ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>

            </Link>
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-4 flex md:hidden justify-center">
             <Button asChild variant="outline" className="w-full rounded-full h-12 border-gray-300 text-brand-black font-bold bg-white">
                <Link href="/products">View Full Catalog</Link>
             </Button>
        </div>

      </div>
    </section>
  );
}