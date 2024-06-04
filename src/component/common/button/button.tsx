import type { FC, ReactNode } from 'react'

import multipleClasses from '@helper/multiple-classes'
import styles from './button.module.css'

type Button = {
    children: ReactNode
    func: () => any
    buttonTheme?: 'light' | 'dark'
    extraClass?: string
}

const Button: FC<Button> = ({ children, func, extraClass = '', buttonTheme = 'dark' }) => {
    return (
        <button className={multipleClasses({ classes: [styles.button, styles[buttonTheme], extraClass] })} onClick={func}>
            {children}
        </button>
    )
}

export default Button
