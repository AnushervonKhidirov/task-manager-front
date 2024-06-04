import Link from 'next/link'
import { navigationList } from './constant'
import { useAppDispatch, useAppSelector } from '@hook/store'

import { close } from '@store/menu/slice'
import multipleClasses from '@helper/multiple-classes'
import styles from './navigation-menu.module.css'

const NavigationMenu = () => {
    const state = useAppSelector(state => state.menu)
    const dispatch = useAppDispatch()

    function closeMenu() {
        dispatch(close())
    }

    return (
        <nav
            id='main-navigation'
            className={multipleClasses({ active: { isActive: state.isOpened, activeClass: 'active' } })}
        >
            <div className={styles.navigation_inner}>
                {navigationList.map(navigationItem => (
                    <Link onClick={closeMenu} href={navigationItem.link} key={nameToId(navigationItem.name)}>
                        {navigationItem.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

function nameToId(name: string): string {
    return name.toLocaleLowerCase().replace(' ', '_')
}

export default NavigationMenu
