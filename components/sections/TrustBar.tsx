import { Award, Truck, ShoppingBag, PackageCheck } from "lucide-react";

const TRUST_ITEMS = [
  { 
    icon: Award, // Changed to Award Ribbon for "Premium"
    title: "Premium Quality", 
    desc: "Crisp print & quality paper" 
  },
  { 
    icon: Truck, 
    title: "Nationwide Shipping", 
    desc: "Cash on Delivery available" 
  },
  { 
    icon: ShoppingBag, 
    title: "Shop with Confidence", 
    desc: "Checkout via Shopee & TikTok" 
  },
  { 
    icon: PackageCheck, 
    title: "Secure Packaging", 
    desc: "Thick bubble wrap protection" 
  },
];

export function TrustBar() {
  return (
    // Restored bg-gray-50 (Light Gray) instead of plain white
    <section className="w-full bg-gray-50 border-b border-gray-100 py-8 md:py-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {TRUST_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              {/* Icon Circle - kept white background to pop against the gray section */}
              <div className="p-3 bg-white rounded-full text-brand-blue shadow-sm border border-gray-100">
                <item.icon className="h-6 w-6" />
              </div>
              
              <div className="space-y-1">
                <h3 className="font-bold text-sm md:text-base text-brand-black leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-tight px-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}