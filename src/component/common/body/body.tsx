'use client'
import type { FC, ReactNode } from 'react'

import { Provider } from 'react-redux'
import Header from '@common/header/header'
import NavigationMenu from '../navigation-menu/navigation-menu'

import { store } from '@store/store'

const Body: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
    return (
        <body>
            <Provider store={store}>
                <Header />
                <NavigationMenu />
                <main>{children}</main>
            </Provider>
        </body>
    )
}

export default Body
