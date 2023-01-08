import React from 'react'
import MenuLink from './MenuLink'
import * as HeroIcons from '@heroicons/react/24/outline'

let iconStyle = "h-5 w-5"

function SidebarFooter() {
    return (
        <div className="flex flex-col mb-3 py-2 mt-0 border-t-[1px]">
            <MenuLink chosen={false} label="Audit Logs" icon={<HeroIcons.EyeIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Settings" icon={<HeroIcons.Cog6ToothIcon className={iconStyle} />} />
        </div>
    )
}

export default SidebarFooter