import React from 'react'
import SidebarUser from './SidebarUser'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'

function Sidebar() {
    return (
        <aside className="flex-initial bg-gray-900 w-56 text-white flex flex-col sticky top-0">
            <SidebarUser />
            <SidebarContent />
            <SidebarFooter />
        </aside>
    )
}

export default Sidebar