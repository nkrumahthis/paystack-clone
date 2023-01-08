import React from 'react'

function MenuDivider(props: { label: string }) {
    let { label } = props
    return (
        <div className='text-slate-400 text-xs mt-5 mb-1 ml-6'>{label}</div>
    )
}

export default MenuDivider