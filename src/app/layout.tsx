import type { Metadata } from 'next'
import type { ReactNode, FC } from 'react'

import Body from '@common/body/body'

import './globals.css'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout: FC<Readonly<{ children: ReactNode }>> = ({ children }) => {
    return (
        <html lang='en'>
            <Body>{children}</Body>
        </html>
    )
}

export default RootLayout
