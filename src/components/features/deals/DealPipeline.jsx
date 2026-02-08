import React from 'react';
import DealCard from './DealCard';

const DealPipeline = () => {
    const stages = [
        {
            id: 'new',
            title: 'New Leads',
            count: 2,
            deals: [
                { id: 1, address: '500 Cyber Lane', client: 'Alice V.', price: '$850k', date: 'Oct 12', probability: 20 },
                { id: 2, address: 'Unit 404, The Void', client: 'Bob D.', price: '$1.2M', date: 'Oct 14', probability: 15 },
            ]
        },
        {
            id: 'showing',
            title: 'Showings',
            count: 3,
            deals: [
                { id: 3, address: '99 Neon Blvd', client: 'Charlie', price: '$2.1M', date: 'Oct 10', probability: 45 },
                { id: 4, address: 'Glass Penthouse', client: 'Dave X', price: '$4.5M', date: 'Today', probability: 40 },
                { id: 5, address: 'Rustic Pods', client: 'Eve', price: '$500k', date: 'Tomorrow', probability: 30 },
            ]
        },
        {
            id: 'negotiation',
            title: 'Negotiation',
            count: 1,
            deals: [
                { id: 6, address: 'The Spire, Lvl 50', client: 'Sarah Connor', price: '$3.2M', date: 'Oct 01', probability: 80 },
            ]
        },
    ];

    return (
        <div className="flex gap-6 overflow-x-auto pb-4">
            {stages.map((stage) => (
                <div key={stage.id} className="min-w-[300px] flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                        <h3 className="font-semibold text-gray-300 flex items-center gap-2">
                            {stage.title}
                            <span className="bg-white/10 text-xs px-2 py-0.5 rounded-full text-gray-400">{stage.count}</span>
                        </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                        {stage.deals.map(deal => (
                            <DealCard key={deal.id} deal={deal} />
                        ))}
                        <button className="py-2 border border-dashed border-white/10 rounded-xl text-sm text-gray-500 hover:text-white hover:border-white/20 transition-colors">
                            + Add Deal
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DealPipeline;
