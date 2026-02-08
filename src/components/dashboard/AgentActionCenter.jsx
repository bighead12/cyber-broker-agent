import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';

const AgentActionCenter = () => {
    const insights = [
        {
            id: 1,
            type: 'feedback',
            icon: MessageSquare,
            title: 'New Feedback on 123 Cyber Ave',
            description: 'Client accepted the modern finish but concerns about the small garden.',
            action: 'Draft Reply',
            priority: 'high',
        },
        {
            id: 2,
            type: 'market',
            icon: TrendingUp,
            title: 'Market Opportunity',
            description: 'Prices in Neo-Tokyo district serve up 5% week-over-week.',
            action: 'View Analysis',
            priority: 'medium',
        },
        {
            id: 3,
            type: 'alert',
            icon: AlertCircle,
            title: 'Missing Documents',
            description: 'Contract for Unit 404 is missing buyer signature.',
            action: 'Resend',
            priority: 'critical',
        }
    ];

    return (
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={120} />
            </div>

            <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                    <div className="w-3 h-3 bg-neon-purple rounded-full animate-ping absolute top-0 right-0"></div>
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center border border-neon-purple/50">
                        <Sparkles size={20} className="text-neon-purple" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">AI Agent Insights</h2>
                    <p className="text-sm text-gray-400">3 pending actions waiting for you</p>
                </div>
            </div>

            <div className="space-y-4">
                {insights.map((item) => (
                    <div key={item.id} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-start gap-4 cursor-pointer hover:bg-white/10 group/item">
                        <div className={`mt-1 p-2 rounded-lg ${item.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                                item.priority === 'high' ? 'bg-neon-purple/20 text-neon-purple' :
                                    'bg-blue-500/20 text-blue-400'
                            }`}>
                            <item.icon size={16} />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-medium text-white group-hover/item:text-neon-purple transition-colors">{item.title}</h3>
                            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.description}</p>

                            <div className="flex items-center gap-2 mt-3 text-xs font-medium text-neon-purple opacity-0 group-hover/item:opacity-100 transition-opacity transform translate-y-2 group-hover/item:translate-y-0 duration-300">
                                <span>{item.action}</span>
                                <ArrowRight size={12} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgentActionCenter;
