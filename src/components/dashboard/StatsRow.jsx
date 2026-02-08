import React from 'react';
import { Home, Users, DollarSign, Activity } from 'lucide-react';

const StatsRow = () => {
    const stats = [
        { label: 'Active Listings', value: '12', change: '+2', icon: Home, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { label: 'Client Inquiries', value: '48', change: '+15%', icon: Users, color: 'text-neon-purple', bg: 'bg-neon-purple/10' },
        { label: 'Pending Deals', value: '$2.4M', change: 'On Track', icon: DollarSign, color: 'text-luxury-gold', bg: 'bg-yellow-500/10' },
        { label: 'Conversion Rate', value: '34%', change: '+1.2%', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                        <stat.icon size={22} className={stat.color} />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                        <h4 className="text-2xl font-bold text-white mt-1">{stat.value}</h4>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsRow;
