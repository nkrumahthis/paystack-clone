import React from 'react'
import MenuLink from './MenuLink'

function SidebarContent() {
    return (
        <ul>
            <li><MenuLink chosen={false} label="Compliance" logo="⟥" /></li>
        </ul>
    )
}

export default SidebarContent