"use client";

import { MapPin, Clock, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Locations() {
  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      {/* FIXED: Removed 'px-4 md:px-6' to match other pages' padding consistency */}
      <div className="container mx-auto">
        {/* Layout: Text First (Mobile) -> Map Second (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="space-y-8 md:px-0">
            {/* Header */}
            <div className="space-y-2">
              <span className="text-brand-blue font-bold tracking-widest text-xs uppercase">
                Physical Store
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-black tracking-tighter">
                Visit our <span className="text-brand-red">Store.</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                Experience the collection in person. Browse our shelves, check
                book conditions, and chat with our bookworms.
              </p>
            </div>

            {/* Details Grid */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black text-lg">
                    Waltermart Pampanga
                  </h3>
                  <p className="text-gray-500">
                    G/F Waltermart, McArthur Highway
                  </p>
                  <p className="text-gray-500">San Fernando, Pampanga</p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-brand-red flex-shrink-0">
                  <Navigation className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black text-lg">
                    How to find us
                  </h3>
                  <p className="text-gray-500">Located on the Ground Floor.</p>
                  <p className="text-brand-black font-medium">
                    Beside Goldilocks & KFC.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-brand-black flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-black text-lg">
                    Store Hours
                  </h3>
                  <p className="text-gray-500">Monday - Sunday (Daily)</p>
                  <p className="text-brand-black font-bold">
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map Embed */}
          <div className="h-[300px] lg:h-[500px] w-full relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 order-last lg:order-none">
            {/* FIXED: Using a Dynamic Search Embed ('q=Waltermart+San+Fernando...') 
                This ensures it always pinpoints the correct location. 
            */}
            <iframe
              src="https://maps.google.com/maps?q=Waltermart+San+Fernando+Pampanga&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
