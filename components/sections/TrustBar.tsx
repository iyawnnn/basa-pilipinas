"use client";

import { Truck, RotateCcw, Store, Heart } from "lucide-react"; 

const TRUST_ITEMS = [
  {
    icon: Store, 
    title: "Visit in Pampanga",
    description: "Located at WalterMart",
  },
  {
    // REPLACED Sparkles with Heart
    // "Heart" = Curated with care / Books with soul.
    icon: Heart, 
    title: "Handpicked Titles",
    description: "Curated with care",
  },
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "Deliver to your door",
  },
  {
    icon: RotateCcw,
    title: "Budget Friendly",
    description: "Reading for everyone",
  },
];

export function TrustBar() {
  return (
    <section className="w-full bg-gray-50 border-b border-gray-100 py-10 md:py-12">
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-8">
          {TRUST_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4 group cursor-default">
              
              {/* Icon Circle */}
              <div className="p-4 bg-white rounded-2xl text-brand-blue shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:text-brand-red">
                <item.icon className="h-6 w-6" />
              </div>
              
              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-base text-brand-black leading-tight">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-gray-500 font-medium leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}