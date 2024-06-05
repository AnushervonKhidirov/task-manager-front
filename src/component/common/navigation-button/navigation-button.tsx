import { useAppDispatch, useAppSelector } from '@hook/store'
import { open, close } from '@store/menu/slice'

import getClassNames from '@helper/multiple-classes'

import styles from './navigation-button.module.css'

const NavigationButton = () => {
    const state = useAppSelector(state => state.menu)
    const dispatch = useAppDispatch()

    function toggleMenuHandler() {
        const handler = state.isOpened ? close : open
        dispatch(handler())
    }

    return (
        <div
            className={getClassNames({ classes: [styles.navigation_baton], active: { isActive: state.isOpened, activeClass: styles.active } })}
            onClick={toggleMenuHandler}
        >
            <div className={getClassNames({ classes: [styles.line, styles.line_0] })}></div>
            <div className={getClassNames({ classes: [styles.line, styles.line_1] })}></div>
            <div className={getClassNames({ classes: [styles.line, styles.line_2] })}></div>
        </div>
    )
}

export default NavigationButton
