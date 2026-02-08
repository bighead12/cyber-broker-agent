import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-cyber-black text-white selection:bg-neon-purple/30 selection:text-neon-purple font-sans overflow-x-hidden">
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

            <Sidebar />

            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 ml-64 p-8 relative z-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
