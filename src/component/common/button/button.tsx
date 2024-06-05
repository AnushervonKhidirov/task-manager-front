import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import getClassNames from '@helper/multiple-classes'
import styles from './button.module.css'

type Button = {
    children: ReactNode
    func?: () => any
    type?: 'button' | 'reset' | 'submit'
    buttonTheme?: 'light' | 'dark'
    extraClass?: string
}

const Button: FC<Button> = ({ children, func, extraClass = '', buttonTheme = 'dark', type = 'button' }) => {
    return (
        <button
            className={getClassNames({ classes: [styles.button, styles[buttonTheme], extraClass] })}
            type={type}
            onClick={func}
        >
            {children}
        </button>
    )
}

export default Button
