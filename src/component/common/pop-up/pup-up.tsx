import type { FC } from 'react'

import { useAppDispatch } from '@hook/store'
import { close } from '@store/pop-up/slice'

import styles from './pop-up.module.css'
import multipleClasses from '@helper/multiple-classes'

const PopUp: FC = () => {
    const dispatch = useAppDispatch()

    function closePopUp() {
        console.log('asdfasdf');
        
        dispatch(close())
    }

    return <div className={multipleClasses({ classes: [styles.pop_up] })} onClick={closePopUp}>
        <div className={styles.content} onClick={e => e.stopPropagation()}></div>
    </div>
}

export default PopUp
