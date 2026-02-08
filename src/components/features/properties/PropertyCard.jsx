import React from 'react';
import { MapPin, Bed, Bath, Store, ArrowUpRight, Heart } from 'lucide-react';

const PropertyCard = ({ property }) => {
    return (
        <div className="glass-card rounded-2xl overflow-hidden group relative hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">

            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button className="p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-neon-purple hover:scale-110 transition-all">
                        <Heart size={18} />
                    </button>
                </div>
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-neon-purple/90 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {property.status}
                    </span>
                </div>
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 truncate">{property.title}</h3>
                    <div className="flex items-center text-gray-300 text-sm">
                        <MapPin size={14} className="mr-1 text-neon-blue" />
                        {property.location}
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Price</span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                            {property.price}
                        </span>
                    </div>

                    <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 group-hover:border-neon-purple/50 transition-all">
                        <ArrowUpRight size={20} className="text-gray-400 group-hover:text-neon-purple" />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5">
                        <Bed size={18} className="text-neon-purple mb-1" />
                        <span className="text-sm font-medium text-gray-300">{property.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5">
                        <Bath size={18} className="text-neon-blue mb-1" />
                        <span className="text-sm font-medium text-gray-300">{property.baths} Bath</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5">
                        <Store size={18} className="text-luxury-gold mb-1" />
                        <span className="text-sm font-medium text-gray-300">{property.sqft} sqft</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Added {property.listedDate}</span>
                    <span className="flex items-center gap-1 text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        High Interest
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
