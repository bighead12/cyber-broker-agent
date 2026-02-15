import React, { createContext, useState, useEffect } from 'react';
import { api } from '../lib/api';

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            const data = await api.getAll();
            
            if (data && data.length > 0) {
                setProperties(data.map(p => ({
                    id: p.id,
                    title: p.title,
                    location: p.location,
                    price: p.price,
                    beds: p.beds,
                    baths: p.baths,
                    sqft: p.sqft,
                    status: p.status,
                    image: p.image,
                    listedDate: p.listedDate
                })));
            } else {
                setProperties(seedProperties);
                for (const p of seedProperties) {
                    await api.create(p);
                }
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
            setProperties(seedProperties);
        } finally {
            setLoading(false);
        }
    };

    const addProperty = async (property) => {
        try {
            const newProperty = {
                title: property.title,
                location: property.location,
                price: property.price,
                beds: property.beds,
                baths: property.baths,
                sqft: property.sqft,
                status: property.status,
                image: property.image,
                listedDate: property.listedDate
            };

            const data = await api.create(newProperty);

            setProperties(prev => [{
                id: data.id,
                title: data.title,
                location: data.location,
                price: data.price,
                beds: data.beds,
                baths: data.baths,
                sqft: data.sqft,
                status: data.status,
                image: data.image,
                listedDate: data.listedDate
            }, ...prev]);
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const removeProperty = async (id) => {
        try {
            await api.delete(id);
            setProperties(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error removing property:', error);
        }
    };

    const updateProperty = async (id, updates) => {
        try {
            await api.update(id, updates);
            setProperties(prev => prev.map(p => 
                p.id === id ? { ...p, ...updates } : p
            ));
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    return (
        <PropertiesContext.Provider value={{ properties, loading, addProperty, removeProperty, updateProperty }}>
            {children}
        </PropertiesContext.Provider>
    );
};

const seedProperties = [
    {
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
