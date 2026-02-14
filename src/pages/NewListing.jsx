import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Upload, MapPin, Bed, Bath, Store } from 'lucide-react';
import { PropertiesContext } from '../context/PropertiesContext';
import { useProperties } from '../context/useProperties';

const NewListing = () => {
    const navigate = useNavigate();
    const { addProperty } = useProperties();
    
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        status: 'New',
        image: '',
        listedDate: 'Just now'
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const newProperty = {
            ...formData,
            id: Date.now(),
            beds: parseInt(formData.beds) || 0,
            baths: parseFloat(formData.baths) || 0,
            sqft: formData.sqft || '0'
        };
        
        addProperty(newProperty);
        
        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => navigate('/')}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft size={20} className="text-white" />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-white">New Listing</h1>
                    <p className="text-gray-400 mt-1">Add a new property to your listings</p>
                </div>
            </div>

            {/* Form */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Basic Information</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Property Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Neon Penthouse Suite"
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., $4,250,000"
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Location</label>
                            <div className="relative">
                                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., Downtown Cyber City"
                                    className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Property Details */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Property Details</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <Bed size={16} className="text-neon-purple" /> Bedrooms
                                </label>
                                <input
                                    type="number"
                                    name="beds"
                                    value={formData.beds}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    placeholder="0"
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <Bath size={16} className="text-neon-blue" /> Bathrooms
                                </label>
                                <input
                                    type="number"
                                    name="baths"
                                    value={formData.baths}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    step="0.5"
                                    placeholder="0"
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                    <Store size={16} className="text-luxury-gold" /> Square Feet
                                </label>
                                <input
                                    type="text"
                                    name="sqft"
                                    value={formData.sqft}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., 2,800"
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Status & Image */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">Status & Media</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-purple transition-colors"
                                >
                                    <option value="New">New</option>
                                    <option value="Exclusive">Exclusive</option>
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Sold">Sold</option>
                                </select>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Image URL</label>
                                <div className="relative">
                                    <Upload size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="url"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                        className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-xl font-medium flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] disabled:opacity-50"
                        >
                            <Save size={18} />
                            {isSubmitting ? 'Saving...' : 'Save Listing'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewListing;
