import React from 'react';

import SideNavBar from '@/components/Admin/SideNavBar';

const Page = ({ children }) => {
    return (
        <>
            <div className='flex'>
                <SideNavBar />
                <div className='flex-1 m-4'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Page