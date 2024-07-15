import type { FC, ReactNode } from 'react'

import { usePopUpStore } from '@store/pop-up'

import CloseButton from '../ close-button/close-button'

import styles from './pop-up.module.css'
import getClassNames from '@helper/multiple-classes'

const PopUp: FC<{ children: ReactNode }> = ({ children }) => {
    const close = usePopUpStore(state => state.close)

    function closePopUp() {
        close()
    }

    return (
        <div className={getClassNames({ classes: [styles.pop_up] })} onClick={closePopUp}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <CloseButton func={closePopUp} />
                {children}
            </div>
        </div>
    )
}

export default PopUp
