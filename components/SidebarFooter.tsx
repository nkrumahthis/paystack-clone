import React from 'react'
import MenuLink from './MenuLink'

function SidebarFooter() {
    return (
        <div className="flex flex-col mb-16 my-2">
            <MenuLink chosen={false} label="Audit Logs" logo="⌂" />
            <MenuLink chosen={false} label="Settings" logo="⌂" />
        </div>
    )
}

export default SidebarFooter