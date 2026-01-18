import { MapPin } from "lucide-react";

export function Locations() {
  return (
    <section className="py-20 bg-brand-dark-gray text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Visit Our Stores
          </h2>
          <p className="text-gray-400">Experience the collection in person.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Waltermart Pampanga */}
          <div className="bg-brand-black border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                <h3 className="text-xl font-bold text-brand-blue">Pampanga Branch</h3>
              </div>
              <p className="text-gray-300 mb-2">G/F Waltermart San Fernando</p>
              <p className="text-gray-500 text-sm">McArthur Highway, San Fernando, Pampanga</p>
            </div>
            {/* Placeholder for Map - You can add the iframe here later */}
            <div className="h-48 bg-white/5 flex items-center justify-center border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="h-5 w-5" />
                <span>Map View</span>
              </div>
            </div>
          </div>

          {/* Ayala Centrio */}
          <div className="bg-brand-black border border-white/10 rounded-2xl overflow-hidden hover:border-brand-blue/50 transition-colors">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold text-brand-blue">Cagayan de Oro</h3>
              </div>
              <p className="text-gray-300 mb-2">G/F Ayala Centrio Mall</p>
              <p className="text-gray-500 text-sm">C.M. Recto Ave, Cagayan de Oro</p>
            </div>
            <div className="h-48 bg-white/5 flex items-center justify-center border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-500">
                 <MapPin className="h-5 w-5" />
                 <span>Map View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}