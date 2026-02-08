import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, Eye, Briefcase, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Building2, label: 'Properties', path: '/properties' },
        { icon: Eye, label: 'Showings', path: '/showings' },
        { icon: Briefcase, label: 'Deals', path: '/deals' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 glass-panel border-r border-white/10 flex flex-col z-50">
            <div className="p-6">
                <h1 className="text-2xl font-bold tracking-tighter cursor-pointer">
                    <span className="text-gradient">CyberBroker</span>
                    <span className="text-neon-purple">.AI</span>
                </h1>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
              ${isActive
                                ? 'bg-neon-purple/20 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-neon-purple/30'
                                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                            }
            `}
                    >
                        <div className={`p-1.5 rounded-lg transition-colors ${item.isActive ? 'bg-neon-purple/30' : 'bg-white/5 group-hover:bg-neon-purple/20'}`}>
                            <item.icon size={18} className="transition-transform group-hover:scale-110" />
                        </div>
                        <span className="font-medium tracking-wide">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/5">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-red-500/20">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
