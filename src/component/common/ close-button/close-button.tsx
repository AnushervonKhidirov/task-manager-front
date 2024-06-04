import multipleClasses from '@helper/multiple-classes'
import type { FC } from 'react'

import styles from './close-button.module.css'

type CloseButton = {
    func: () => void
    extraClass?: string
}

const CloseButton: FC<CloseButton> = ({ func, extraClass = '' }) => {
    return (
        <div className={multipleClasses({ classes: [styles.close_button, extraClass] })} onClick={func}>
            <div className={multipleClasses({ classes: [styles.line, styles.line_0] })}></div>
            <div className={multipleClasses({ classes: [styles.line, styles.line_1] })}></div>
        </div>
    )
}

export default CloseButton
