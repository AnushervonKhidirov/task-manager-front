import { useMenuStore } from '@store/menu'

import getClassNames from '@helper/multiple-classes'

import styles from './navigation-button.module.css'

const NavigationButton = () => {
    const { isOpened, open, close } = useMenuStore(state => state)

    function toggleMenuHandler() {
        isOpened ? close() : open()
    }

    return (
        <div
            className={getClassNames({ classes: [styles.navigation_baton], active: { isActive: isOpened, activeClass: styles.active } })}
            onClick={toggleMenuHandler}
        >
            <div className={getClassNames({ classes: [styles.line, styles.line_0] })}></div>
            <div className={getClassNames({ classes: [styles.line, styles.line_1] })}></div>
            <div className={getClassNames({ classes: [styles.line, styles.line_2] })}></div>
        </div>
    )
}

export default NavigationButton
