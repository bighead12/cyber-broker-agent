import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
    {
        id: 1,
        title: 'Neon Penthouse Suite',
        location: 'Downtown Cyber City',
        price: '$4,250,000',
        beds: 3,
        baths: 3.5,
        sqft: '2,800',
        status: 'Exclusive',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop',
        listedDate: '2 days ago',
    },
    {
        id: 2,
        title: 'Minimalist Void Villa',
        location: 'Sector 7, The Outskirts',
        price: '$2,800,000',
        beds: 4,
        baths: 3,
        sqft: '3,200',
        status: 'New',
        image: 'https://images.unsplash.com/photo-1600596542815-e32c8cc22bc9?q=80&w=2800&auto=format&fit=crop',
        listedDate: '5 hrs ago',
    },
    {
        id: 3,
        title: 'Skyline Glass Cube',
        location: 'Upper East Cloud Layer',
        price: '$6,500,000',
        beds: 5,
        baths: 6,
        sqft: '5,500',
        status: 'Sold',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2800&auto=format&fit=crop',
        listedDate: '1 week ago',
    }
];

const FeaturedProperties = () => {
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
