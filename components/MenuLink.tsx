import Link from 'next/link'
import React from 'react'

interface Props { chosen: boolean, label: string, icon: JSX.Element }

function MenuLink(props: Props) {
    let { chosen, label, icon } = props
    let chosenStyle = "text-cyan-500"

    return (
        <div>
            <Link href="#" className={'flex flex-row py-1 pl-6 text-sm hover:bg-gray-800 w-full my-1 ' + (chosen ? chosenStyle : '')}>
                {icon}
                <span className="ml-2">{label}</span>

            </Link>
        </div>
    )
}

export default MenuLink