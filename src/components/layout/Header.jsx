import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <header className="h-20 glass-panel sticky top-0 z-40 flex items-center justify-between px-8 border-b border-white/10 ml-64 bg-opacity-80 backdrop-blur-xl">
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-96' : 'w-64'}`}>
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${searchFocused ? 'text-neon-purple' : 'text-gray-500'}`} />
                <input
                    type="text"
                    placeholder="Search properties, clients, deals..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all duration-300 hover:bg-black/30"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-gray-500 font-mono">⌘K</div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/10 group">
                    <Bell size={20} className="group-hover:animate-pulse" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_8px_#a855f7]"></span>
                </button>

                <div className="h-8 w-[1px] bg-white/10 mx-2"></div>

                <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue p-[1px]">
                        <div className="w-full h-full rounded-full bg-cyber-gray flex items-center justify-center">
                            <User size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-medium text-white group-hover:text-neon-purple transition-colors">Broker Jeff</p>
                        <p className="text-xs text-gray-500">Top Agent</p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
