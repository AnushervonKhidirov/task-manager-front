'use client'
import type { FC, ReactNode } from 'react'

import Header from '@component/header/header'
import NavigationMenu from '@component/common/navigation-menu/navigation-menu'

const Body: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
    return (
        <body>
            <Header />
            <NavigationMenu />
            <main>{children}</main>
        </body>
    )
}

export default Body
