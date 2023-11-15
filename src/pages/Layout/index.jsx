import React from 'react';
import Sidebar from '../../components/Sidebarr';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='flex overflow-hidden'>
            <Sidebar />
            <main className='w-full overflow-y-scroll max-h-[923px]'>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;