import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import SupportButton from '../components/SupportButton'

function dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content />
            <SupportButton />
        </div >
    )
}

export default dashboard