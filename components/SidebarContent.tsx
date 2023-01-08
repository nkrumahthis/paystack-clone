import React from 'react'
import MenuLink from './MenuLink'
import MenuDivider from './MenuDivider'

function SidebarContent() {
    return (
        <div className="flex flex-col grow my-2 overflow-y-scroll h-full">
            <MenuLink chosen={false} label="Compliance" logo="⟥" />
            <MenuLink chosen={false} label="Home" logo="⌂" />
            <MenuLink chosen={false} label="Transactions" logo="⌂" />
            <MenuLink chosen={false} label="Customers" logo="⌂" />
            <MenuLink chosen={false} label="Refunds" logo="⌂" />
            <MenuLink chosen={false} label="Payouts" logo="⌂" />
            <MenuLink chosen={false} label="Disputes" logo="⌂" />
            <MenuLink chosen={false} label="Transaction Splits" logo="⌂" />
            <MenuLink chosen={false} label="Subaccounts" logo="⌂" />
            <MenuLink chosen={false} label="Terminals" logo="⌂" />
            <MenuLink chosen={false} label="Subscribers" logo="⌂" />
            <MenuLink chosen={false} label="Plans" logo="⌂" />
            <MenuLink chosen={false} label="Subscriptions" logo="⌂" />
            <MenuLink chosen={false} label="Transfers" logo="⌂" />
            <MenuLink chosen={false} label="Recipients" logo="⌂" />
            <MenuLink chosen={false} label="Balance" logo="⌂" />
            <MenuLink chosen={false} label="Payment Pages" logo="⌂" />
            <MenuLink chosen={false} label="Products" logo="⌂" />
            <MenuLink chosen={false} label="Storefronts" logo="⌂" />
            <MenuLink chosen={false} label="Orders" logo="⌂" />
            <MenuLink chosen={false} label="Invoices" logo="⌂" />

        </div>

    )
}

export default SidebarContent