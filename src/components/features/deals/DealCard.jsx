import React from 'react';
import { MoreHorizontal, Calendar, DollarSign } from 'lucide-react';

const DealCard = ({ deal }) => {
    return (
        <div className="glass-card p-4 rounded-xl cursor-grab active:cursor-grabbing group hover:bg-white/10 transition-colors border border-white/5 hover:border-neon-purple/30">
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-white group-hover:text-neon-purple transition-colors">{deal.address}</h4>
                <button className="text-gray-500 hover:text-white p-1 rounded-md hover:bg-white/10">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-[10px] font-bold">
                    {deal.client.charAt(0)}
                </div>
                <span className="text-sm text-gray-300">{deal.client}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 border-t border-white/5 pt-3">
                <div className="flex items-center gap-1.5">
                    <DollarSign size={12} className="text-luxury-gold" />
                    <span>{deal.price}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{deal.date}</span>
                </div>
            </div>

            {deal.probability && (
                <div className="mt-3 w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                        style={{ width: `${deal.probability}%` }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default DealCard;
