import React from 'react'

function MenuLink(props: { chosen: boolean, label: string, logo: string }) {
    let { chosen, label, logo } = props
    return (
        <h4 className='m-2 ml-2 p-2 text-sm'>{label} {logo}</h4>
    )
}

export default MenuLink