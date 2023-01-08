import React from 'react'
import SidebarUser from './SidebarUser'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'

function Sidebar() {
    return (
        <div className="flex-initial bg-gray-900 w-56 text-white flex flex-col">
            <SidebarUser />
            <SidebarContent />
            <SidebarFooter />
        </div>
    )
}

export default Sidebar