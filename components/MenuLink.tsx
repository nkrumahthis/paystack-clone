import Link from 'next/link'
import React from 'react'

function MenuLink(props: { chosen: boolean, label: string, logo: string }) {
    let { chosen, label, logo } = props
    return (
        <Link href="#" className='py-1 pl-6 text-sm hover:bg-gray-800 w-full'><i>{logo}</i> {label}</Link>
    )
}

export default MenuLink