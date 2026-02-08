import React from 'react';
import StatsRow from '../components/dashboard/StatsRow';
import AgentActionCenter from '../components/dashboard/AgentActionCenter';
import DealPipeline from '../components/features/deals/DealPipeline';
import FeaturedProperties from '../components/features/properties/FeaturedProperties';
import { Plus } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-400 mt-1">Welcome back, Agent. Market momentum is high today.</p>
                </div>
                <button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                    <Plus size={18} />
                    <span>New Listing</span>
                </button>
            </div>

            {/* Stats */}
            <StatsRow />

            <FeaturedProperties />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column (2/3) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Quick Properties Preview or Chart could go here */}
                    {/* Quick Properties Preview or Chart could go here */}
                    <div className="glass-panel p-6 rounded-2xl min-h-[400px] border border-white/10 relative overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-white">Deal Flow Pipeline</h3>
                            <button className="text-sm text-neon-purple hover:text-white transition-colors">View All Deals</button>
                        </div>
                        <div className="flex-1 overflow-x-auto">
                            <DealPipeline />
                        </div>
                    </div>
                </div>

                {/* Right Column (1/3) - Agent Interface */}
                <div className="lg:col-span-1">
                    <AgentActionCenter />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
