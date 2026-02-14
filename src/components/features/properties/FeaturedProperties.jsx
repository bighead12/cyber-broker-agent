import React from 'react';
import PropertyCard from './PropertyCard';
import { useProperties } from '../../../context/useProperties';

const FeaturedProperties = () => {
    const { properties } = useProperties();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Featured Listings</h2>
                <button className="text-sm text-neon-purple hover:text-white transition-colors uppercase tracking-widest font-medium">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProperties;
