import React, { createContext, useState } from 'react';

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([
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
    ]);

    const addProperty = (property) => {
        setProperties(prev => [property, ...prev]);
    };

    const removeProperty = (id) => {
        setProperties(prev => prev.filter(p => p.id !== id));
    };

    const updateProperty = (id, updates) => {
        setProperties(prev => prev.map(p => 
            p.id === id ? { ...p, ...updates } : p
        ));
    };

    return (
        <PropertiesContext.Provider value={{ properties, addProperty, removeProperty, updateProperty }}>
            {children}
        </PropertiesContext.Provider>
    );
};
