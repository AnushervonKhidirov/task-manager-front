import type { FC, ReactNode } from 'react'

import { useAppDispatch } from '@hook/store'
import { close } from '@store/pop-up/slice'

import CloseButton from '../ close-button/close-button'

import styles from './pop-up.module.css'
import multipleClasses from '@helper/multiple-classes'

const PopUp: FC<{ children: ReactNode }> = ({ children }) => {
    const dispatch = useAppDispatch()

    function closePopUp() {
        dispatch(close())
    }

    return (
        <div className={multipleClasses({ classes: [styles.pop_up] })} onClick={closePopUp}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <CloseButton func={closePopUp} />
                {children}
            </div>
        </div>
    )
}

export default PopUp
