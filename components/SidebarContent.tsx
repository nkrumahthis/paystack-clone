import React from 'react'
import MenuLink from './MenuLink'
import MenuDivider from './MenuDivider'

import * as HeroIcons from '@heroicons/react/24/outline'

let iconStyle = "h-5 w-5"

function SidebarContent() {
    return (
        <div className="flex flex-col grow my-2 overflow-y-scroll h-full">
            <MenuLink chosen={false} label="Compliance" icon={<HeroIcons.CheckCircleIcon className={iconStyle} />} />
            <MenuLink chosen={true} label="Home" icon={<HeroIcons.HomeIcon className={iconStyle} />} />

            <MenuDivider label="PAYMENTS" />
            <MenuLink chosen={false} label="Transactions" icon={<HeroIcons.CreditCardIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Customers" icon={<HeroIcons.UsersIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Refunds" icon={<HeroIcons.ReceiptRefundIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Payouts" icon={<HeroIcons.ArrowDownCircleIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Disputes" icon={<HeroIcons.FlagIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Transaction Splits" icon={<HeroIcons.ArrowsRightLeftIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Subaccounts" icon={<HeroIcons.BookmarkSquareIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Terminals" icon={<HeroIcons.DeviceTabletIcon className={iconStyle} />} />

            <MenuDivider label="RECURRING" />
            <MenuLink chosen={false} label="Subscribers" icon={<HeroIcons.UserGroupIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Plans" icon={<HeroIcons.Square3Stack3DIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Subscriptions" icon={<HeroIcons.Square2StackIcon className={iconStyle} />} />

            <MenuDivider label="TRANSFERS" />
            <MenuLink chosen={false} label="Transfers" icon={<HeroIcons.PaperAirplaneIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Recipients" icon={<HeroIcons.UserPlusIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Balance" icon={<HeroIcons.WalletIcon className={iconStyle} />} />

            <MenuDivider label="COMMERCE" />
            <MenuLink chosen={false} label="Payment Pages" icon={<HeroIcons.LinkIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Products" icon={<HeroIcons.ShoppingBagIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Storefronts" icon={<HeroIcons.BuildingStorefrontIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Orders" icon={<HeroIcons.ShoppingCartIcon className={iconStyle} />} />
            <MenuLink chosen={false} label="Invoices" icon={<HeroIcons.EnvelopeIcon className={iconStyle} />} />
        </div>

    )
}

export default SidebarContent