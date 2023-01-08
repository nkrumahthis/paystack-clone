import React from 'react'
import MenuLink from './MenuLink'
import MenuDivider from './MenuDivider'

function SidebarContent() {
    return (
        <div className="flex flex-col grow my-2">
            <MenuLink chosen={false} label="Compliance" logo="⟥" />
            <MenuLink chosen={false} label="Home" logo="⌂" />
        </div>

    )
}

export default SidebarContent